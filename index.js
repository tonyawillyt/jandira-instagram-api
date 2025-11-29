const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true, message: "API da Jandira está no ar" });
});

app.post("/instagram/audit", (req, res) => {
  const { handle, profileUrl, objective, language } = req.body;

  if (!handle) {
    return res.status(400).json({ error: "Campo 'handle' é obrigatório." });
  }

  const responseMock = {
    profile: {
      handle: handle.replace("@", ""),
      name: "Exemplo Loja X",
      bio: "Loja de produtos de beleza naturais. Envio para todo o Brasil.",
      link: "https://lojaexemplo.com",
      followers: 3250,
      following: 540,
      posts: 180
    },
    contentStats: {
      avgLikes: 120,
      avgComments: 8,
      avgSaves: 15,
      postingFrequencyPerWeek: 4,
      mostUsedFormats: ["Reels", "Carrossel", "Foto única"],
      bestPerformingPostsExamples: [
        {
          url: "https://instagram.com/p/EXEMPLO1",
          likes: 420,
          comments: 35,
          shortDescription: "Antes e depois de cliente usando produto X."
        },
        {
          url: "https://instagram.com/p/EXEMPLO2",
          likes: 380,
          comments: 20,
          shortDescription: "Reels mostrando bastidores da empresa."
        }
      ]
    },
    audienceStats: null,
    diagnosis: {
      strengths: [
        "Boa frequência de postagem.",
        "Uso consistente de Reels, que trazem mais alcance.",
        "Bio clara com proposta de valor e link ativo."
      ],
      improvementPoints: [
        "Pouco uso de chamadas para ação (CTA) nos posts.",
        "Layout visual inconsistente entre os criativos.",
        "Pouca prova social (depoimentos, prints de clientes, etc.)."
      ]
    }
  };

  return res.json(responseMock);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
