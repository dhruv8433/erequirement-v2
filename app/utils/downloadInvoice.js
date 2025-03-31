import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const DownloadInvoice = (order) => {
  if (!order || !order.service) {
    console.error("Invalid order data");
    return;
  }

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Invoice Title
  doc.setFontSize(22);
  doc.setTextColor(44, 62, 80);
  doc.text("ERequirement Invoice", pageWidth / 2, 15, { align: "center" });

  // Divider Line
  doc.setDrawColor(200);
  doc.line(14, 20, pageWidth - 14, 20);

  // Order & Payment Details
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(`Order ID: ${order._id || "N/A"}`, 14, 30);
  doc.text(`Date: ${new Date(order.createdAt).toLocaleDateString()}`, 14, 38);
  doc.text(`Payment: ${order.paymentType?.toUpperCase() || "N/A"}`, 14, 46);
  doc.text(`Order Status: ${order.orderStatus?.toUpperCase() || "N/A"}`, 14, 54);

  // Product Table Header
  const tableColumn = ["#", "Service Name", "Qty", "Price ($)", "Total ($)"];
  const tableRows = [];

  let grandTotal = 0;
  order.service.forEach((service, index) => {
    const price = service.product?.DiscountedPrice || 0;
    const quantity = service.quantity || 1; // Default to 1 if quantity is missing
    const total = price * quantity;
    grandTotal += total;

    tableRows.push([
      index + 1,
      service.product?.ServiceName || "Unknown Service",
      quantity,
      `$${price.toFixed(2)}`,
      `$${total.toFixed(2)}`,
    ]);
  });

  // Use autoTable for full-width formatting
  autoTable(doc, {
    startY: 65,
    head: [tableColumn],
    body: tableRows,
    theme: "grid",
    headStyles: { fillColor: [255, 140, 0], textColor: 255, fontSize: 12 }, // Orange header
    styles: { fontSize: 10, cellPadding: 3 },
    tableWidth: "auto",
    columnStyles: {
      0: { cellWidth: 15, halign: "center" }, // Serial Number
      1: { cellWidth: "auto" }, // Service Name auto-adjusts
      2: { cellWidth: 20, halign: "center" }, // Quantity
      3: { cellWidth: 35, halign: "right" }, // Price
      4: { cellWidth: 40, halign: "right" }, // Total
    },
  });

  // Total Summary Section
  const summaryStartY = doc.lastAutoTable.finalY + 10;
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(`Subtotal: $${grandTotal.toFixed(2)}`, pageWidth - 50, summaryStartY);

  // Footer Section
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Thank you for choosing ERequirement!", 14, summaryStartY + 20);
  doc.setFont("helvetica", "normal");
  doc.text("Visit our website: www.erequirement.com", 14, summaryStartY + 28);
  doc.text("Support: support@erequirement.com | +91 98765 43210", 14, summaryStartY + 36);

  // Save PDF
  doc.save(`ERequirement_Invoice_${order._id || "Unknown"}.pdf`);
};

export default DownloadInvoice;
