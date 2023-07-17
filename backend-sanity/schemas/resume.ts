export default {
    name: 'resumePDF',
    type: 'document',
    title: "Resume's PDF",
    fields: [
      {
        name: 'resumePDF',
        type: 'file',
        title: "Resume's PDF",
        options: {
          accept: 'application/pdf',
        },
      },
    ],
  };