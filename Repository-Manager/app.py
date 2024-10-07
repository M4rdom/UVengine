import io
from flask import Flask, jsonify ,send_file
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

GITHUB_API_URL = 'https://api.github.com/repos/M4rdom/Templates/contents'


@app.route('/templates', methods=['GET'])
def list_templates():
    try:
        response = requests.get(GITHUB_API_URL)

        if response.status_code == 200:
            contents = response.json()

            
            directories = [item['name'] for item in contents if item['type'] == 'dir']

            
            return jsonify(directories)

        else:
            return jsonify({'error': 'No se pudo obtener el contenido del repositorio'}), response.status_code

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/<directory_name>/Versions', methods=['GET'])
def list_versions(directory_name):
    try:
        response = requests.get(GITHUB_API_URL+f'/{directory_name}')

        if response.status_code == 200:
            contents = response.json()

            directories = [item['name'] for item in contents if item['type'] == 'dir']

            return jsonify(directories)

        else:
            return jsonify({'error': 'No se pudo obtener el contenido del repositorio'}), response.status_code

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/<directory_name>/<version>/FeatureModel', methods=['GET'])
def download_uvl(directory_name, version):
    try:
        file_url = f'https://raw.githubusercontent.com/M4rdom/Templates/main/{directory_name}/{version}/Feature Model/{directory_name}_fm.uvl'
        
        # Hacemos una solicitud GET a la URL del archivo
        response = requests.get(file_url)

        if response.status_code == 200:
            # Crear un objeto BytesIO para enviar el archivo como respuesta
            file_stream = io.BytesIO(response.content)
            return send_file(file_stream, as_attachment=True, download_name=f'{directory_name}_fm.uvl')
        else:
            return jsonify({'error': 'No se pudo descargar el archivo'}), response.status_code
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/download-repo', methods=['GET'])
def download_repo():
    try:
        owner = 'M4rdom'
        repo = 'Templates'
        branch = 'main'  # Cambia esto si necesitas otra rama

        # URL de descarga del archivo ZIP del repositorio
        zip_url = f'https://github.com/{owner}/{repo}/archive/refs/heads/{branch}.zip'
        
        # Hacemos una solicitud GET a la URL del archivo ZIP
        response = requests.get(zip_url)
        
        if response.status_code == 200:
            # Crear un objeto BytesIO para enviar el archivo como respuesta
            zip_stream = io.BytesIO(response.content)
            return send_file(zip_stream, as_attachment=True, download_name=f'{repo}-{branch}.zip')
        else:
            return jsonify({'error': 'No se pudo descargar el repositorio'}), response.status_code
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)