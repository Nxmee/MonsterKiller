#pip install flask
from flask import Flask, render_template
app = Flask(__name__, template_folder='', debug=True)

@app.route("/")
def hello():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()