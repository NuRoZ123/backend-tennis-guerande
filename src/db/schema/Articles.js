import mongoose from "mongoose";

const Schema = mongoose.Schema;

let articlesSchema = new Schema(
  {
      image: {
          type: mongoose.ObjectId,
          ref: "Photos",
          required: false
      },
      auteur: {
          type: mongoose.ObjectId,
          ref: "Employes",
          required: true
      },
      titre: {
          type: String,
          required: true
      },
      contenu: {
          type: String,
          required: true
      },
      categorie: {
          type: String,
          required: true
      },
      date: {
          type: Date,
          required: true
      },
      afficher: {
          type: Boolean,
          required: true
      },
      favoris: {
          type: Boolean,
          required: true
      },
      saisonnier: {
          type: Boolean,
          required: true
      },
  },
  {
    timestamps: true,
  }
);

articlesSchema.set("toJSON", { getters: true });


articlesSchema.statics = {
    getArticles: async () => {
      return await Articles.find().sort({"createdAt": -1}).exec()
        .then((articles) => {
          if (!articles) return undefined
          return articles;
        })
        .catch((erreur) => {
          console.log(erreur);
          return undefined;
        });
    },

    getArticlesByCategorie: async (categorie) => {
        return await Articles.find({"categorie": categorie}).sort({"createdAt": -1}).exec()
        .then((articles) => {
            if (!articles) return undefined
            return articles;
        })
        .catch((erreur) => {
            console.log(erreur);
            return undefined;
        });
    },
}

export const Articles = mongoose.model("Articles", articlesSchema);

