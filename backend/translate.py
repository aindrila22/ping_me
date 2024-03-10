from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/translate', methods=['POST'])
def translate_text():
    try:
        data = request.get_json()
        language = data['language']
        text = data['text']

        # Perform translation here using your translation logic
        translated_text = "Translated text for " + text  # Replace this with actual translation logic

        # Return the translated text as JSON response
        return jsonify({'translated_text': translated_text})
    except Exception as e:
        # In case of any errors, return an error response
        print('Error:', e)
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8080)
