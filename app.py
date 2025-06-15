from flask import Flask,render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/download-resume')
def download_resume():
    resume_path = os.path.join(app.root_path, 'static', 'resume')
    return send_from_directory(directory=resume_path, path='Sourav_Debnath_Resume.pdf', as_attachment=True)

@app.route('/vehicle_parking_V2')
def vehicle_parking_V2():
    return "This Weblink will be active soon."

if __name__ == '__main__':
    app.run(debug=True)