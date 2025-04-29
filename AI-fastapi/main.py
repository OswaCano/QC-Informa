from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()
modelo = joblib.load('modelo_entrenado.pkl')  # o 'modelo_categorias.pkl'

class EntradaTexto(BaseModel):
    texto: str

@app.post("/clasificar")
def clasificar(data: EntradaTexto):
    pred = modelo.predict([data.texto])
    return {"categoria": pred[0]}
