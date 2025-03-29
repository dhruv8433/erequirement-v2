import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const downloadInvoice = async (order) => {
  const doc = new jsPDF();

  // Website Logo
  const img = new Image();
  img.src = "/logo.png"; // Replace with your logo path

  doc.addImage(img, "PNG", 15, 10, 100, 30);

  doc.setFontSize(14);
  doc.text("Invoice", 100, 40, { align: "center", marginTop: 50, fontWeight: "bold" });

  // Customer & Order Details
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Order ID: ${order._id}`, 15, 55);
  doc.text(`Date: ${new Date(order.createdAt).toLocaleDateString()}`, 15, 65);
  doc.text(`Status: ${order.orderStatus.toUpperCase()}`, 15, 75);
  doc.text(`Payment Type: ${order.paymentType.toUpperCase()}`, 15, 85);
  doc.text(`Total Price: $${order.totalPrice.toFixed(2)}`, 15, 95);

  // Line Divider
  doc.setDrawColor(150);
  doc.line(15, 105, 195, 105);

  // Services Table
  doc.setFont("helvetica", "bold");
  doc.text("Services:", 15, 115);
  
  autoTable(doc, {
    startY: 120,
    head: [["#", "Service Name", "Price ($)"]],
    body: order.service.map((service, index) => [
      index + 1,
      service.product?.ServiceName || "Unknown Service",
      `$${service.product?.DiscountedPrice?.toFixed(2) || "N/A"}`
    ]),
    theme: "grid",
    styles: { fontSize: 10 },
    headStyles: { fillColor: [22, 160, 133] }, // Green header
  });

  // Footer Section
  const finalY = doc.lastAutoTable.finalY + 10;
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Thank you for choosing ERequirement!", 15, finalY + 10);
  doc.setFont("helvetica", "normal");
  doc.text("Visit our website: www.erequirement.com", 15, finalY + 20);
  
  doc.save(`Invoice-${order._id}.pdf`);
};
