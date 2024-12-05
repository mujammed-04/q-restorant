document.addEventListener("DOMContentLoaded", function() {
    // Generate QR Code
    const qrCodeImage = document.getElementById("qr-code");
    const qrText = "https://www.example.com"; // This is the link or text for the QR code

    

  
    // Use the qrcode library to generate QR code and set the source of the image
    QRCode.toDataURL(qrText, { errorCorrectionLevel: 'H' }, function (err, url) {
      if (err) {
        console.error("Error generating QR code: ", err);
      } else {
        qrCodeImage.src = url;
      }
    });
  
    // Save the QR code when the button is clicked
    document.getElementById("save-qr").addEventListener("click", function() {
      const qrCodeUrl = qrCodeImage.src;
      const link = document.createElement("a");
      link.href = qrCodeUrl;
      link.download = "qr-code.png"; // Set the file name
      link.click(); // Trigger the download
    });
  });
  

  