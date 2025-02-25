import json
import os
from flask import Flask, jsonify
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)

def load_fake_db():
    try:
        json_file_path = './db.json'
        
        with open(json_file_path, 'r') as f:
            db_data = json.load(f)
            if isinstance(db_data, dict):
                return db_data
            else:
                return {"error": "Il contenuto del file JSON non è un dizionario valido."}
    except Exception as e:
        return {"error": f"Errore nel caricamento dei dati: {str(e)}"}

@app.route('/wp', methods=['GET'])
def get_wp():
    return jsonify(load_fake_db().get("wp", []))

@app.route('/progetto', methods=['GET'])
def get_progetto():
    return jsonify(load_fake_db().get("progetto", []))

@app.route('/docente', methods=['GET'])
def get_docente():
    return jsonify(load_fake_db().get("docente", []))

@app.route('/professori', methods=['GET'])
def get_professori():
    return jsonify(load_fake_db().get("professori", []))

@app.route('/ricercatori', methods=['GET'])
def get_ricercatori():
    return jsonify(load_fake_db().get("ricercatori", []))

@app.route('/ordinari', methods=['GET'])
def get_ordinari():
    return jsonify(load_fake_db().get("ordinari", []))

@app.route('/associati', methods=['GET'])
def get_associati():
    return jsonify(load_fake_db().get("associati", []))

@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Risorsa non trovata"}), 404

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({"error": "Errore interno del server"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5004)
