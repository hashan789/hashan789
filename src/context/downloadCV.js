const downloadCV = () => {
    const pdfUrl = "/hashan_malinda.pdf";
    const link = document.createElement("a");
    link.setAttribute("href", encodeURIComponent(pdfUrl));
    link.setAttribute('download',"hashan_malinda.pdf"); // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default downloadCV;