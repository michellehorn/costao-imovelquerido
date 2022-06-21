import logo from "../assets/Azul_Vertical.png";

const downloadStatement = (data, my) => {
  const isNeg = (value) => {
    const hasSign = value.indexOf("-");
    if (hasSign === 0) return true;
    return false;
  };

  const colorValue = (value) => (isNeg(value) ? "#8D0B0B" : "#13395C");

  const page = window.open("", "", "height=fit-content, width: 500px");
  page.document.write(
    `<html><head><style>@import "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap";
    td { font-size: 14px;}
        </style>
        <div style="text-align: center; width: 100%; padding-top: 2em">
        <img id="logo" alt="logo" style="width: 100px"/>
        <h1>Extrato de locação</h1>
        <h5>${my}</h5>
        </div>
    </head>`
  );
  const logoEl = page.document.getElementById("logo");
  logoEl.setAttribute("src", logo);

  page.document.title = `Extrato de locação | Ref ${my}`;
  page.document.write(`<body style="font-family: 'Montserrat', sans-serif;" >`);
  page.document.write(
    `<table style="width: 100%;background-color: transparent;border-spacing: 0 1em; padding: 3em; max-width: 660px; margin: auto;"><thead style="text-align: left; width: 100%; color: #444;">`
  );
  //table header
  page.document.write(`<tr style="margin-top: 40px;">`);
  page.document.write(`<th style="width: 80px;">Apto</th>`);
  page.document.write(`<th style="width: 300px;">Data</th>`);
  page.document.write(
    `<th style="width: 180px; text-align: right;">Valor</th></thead>`
  );

  //table body

  page.document.write(`<tbody>`);
  data.map((item) => {
    page.document.write(`<tr style="width: 100px; margin-top: 40px;">`);
    page.document.write(
      `<td style="width: 80px; font-weight: 700; margin-bottom: .5em; border-bottom: 1px solid #EEEEEE; padding: 1.5em 0em;">${item.Apto}</th>`
    );
    page.document
      .write(`<td style="width: 300px; display: flex; flex-direction: column;border-bottom: 1px solid #EEEEEE; padding: 1.5em 0em;">
    <span style="display: block; width: 100%; padding-bottom: .5em; font-size: 12px;">${item.Data}</span>
    <span style="display: block;">${item.Historico}</span>
    </th>`);
    page.document.write(
      `<td style="width: 180px; border-bottom: 1px solid #EEEEEE; padding: 1.5em 0em; text-align: right; color:${colorValue(
        item.Valor
      )}">${item.Valor}</th>`
    );
  });
  page.document.write(`</tbody>`);
  page.document.write(`</tr></thead>`);
  page.document.write(`</table>`);
  page.document.write(`</body><script>
  
 
  
  </script></html>`);

  page.document.close();
  page.focus();
};

export { downloadStatement };
