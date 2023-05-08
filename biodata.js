var http = require("http");
var biodata = require("./modules/moduleBiodata");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Biodata Diri</h1>`);
    res.write(
      `<p>Nama: ${biodata.getName("Mochamad Galih Sulistio Pratama")}</p>`
    );
    res.write(`<p>Tempat Lahir: ${biodata.getTempatLahir("Tasikmalaya")}</p>`);
    res.write(`<p>Tanggal Lahir: ${biodata.getTanggalLahir("18 Juli")}</p>`);
    res.write(
      `<p>Alamat: ${biodata.getAlamat(
        "Jl.Cijerah Kp.Sayuran Kota Bandung"
      )}</p>`
    );
  })
  .listen(8080);
