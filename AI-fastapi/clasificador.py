import json
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline

def entrenar_modelo():
    with open('dataset.json', 'r', encoding='utf-8') as f:
        datos = json.load(f)

    textos = [item['texto'] for item in datos]
    categorias = [item['categoria'] for item in datos]

    modelo = make_pipeline(
        TfidfVectorizer(),
        MultinomialNB()
    )

    modelo.fit(textos, categorias)
    joblib.dump(modelo, 'modelo_entrenado.pkl')

if __name__ == "__main__":
    entrenar_modelo()