const billItems = {
  title: "Emissão de 2ª via de boleto",
  header: [
    { text: "Mês ref.", size: "130px" },
    { text: "Descrição", size: "340px" },
    { text: "Vencimento", size: "180px" },
    { text: "", size: "120px" },
  ],
  values: [
    {
      month: "01/22",
      description: "Despesas condominais",
      due_date: "10/02/22",
      download_link: "https://github.com",
    },
  ],
};

const condItems = {
  title: "Documentos condominiais",
  header: [
    { text: "Criado em", size: "130px" },
    { text: "Descrição", size: "500px" },
    { text: "", size: "120px" },
  ],
  values: [
    {
      created_at: "01/22",
      description: "Regimento interno",
      download_link: "https://github.com",
    },
    {
      created_at: "01/22",
      description: "Regimento interno",
      download_link: "https://github.com",
    },
    {
      created_at: "01/22",
      description: "Regimento interno",
      download_link: "https://github.com",
    },
    {
      created_at: "01/22",
      description: "Regimento interno",
      download_link: "https://github.com",
    },
    {
      created_at: "01/22",
      description: "Regimento interno",
      download_link: "https://github.com",
    },
  ],
};

const locItems = {
  title: "Documentos locação",
  header: [
    { text: "Criado em", size: "130px" },
    { text: "Descrição", size: "500px" },
    { text: "", size: "120px" },
  ],
  values: [
    {
      created_at: "01/22",
      description: "Ata Assembleia",
      download_link: "https://github.com",
    },
    {
      created_at: "01/22",
      description: "Ata Assembleia",
      download_link: "https://github.com",
    },
    {
      created_at: "01/22",
      description: "Ata Assembleia",
      download_link: "https://github.com",
    },
    {
      created_at: "01/22",
      description: "Ata Assembleia",
      download_link: "https://github.com",
    },
    {
      created_at: "01/22",
      description: "Ata Assembleia",
      download_link: "https://github.com",
    },
  ],
};


const statementItems = {
  title: "Extrato de Locação",
  header: [
    { text: "Mês ref.", size: "130px" },
    { text: "Descrição", size: "340px" },
    { text: "", size: "120px" },
  ],
  values: [
    {
      month: "01/22",
      description: "Despesas condominais",
      download_link: "https://github.com",
    },
  ],
};

export { billItems, condItems, locItems, statementItems };
