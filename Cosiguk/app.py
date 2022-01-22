from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("home.html")


@app.route('/subway')
def subway_info():
    return render_template("subway.html")


@app.route('/bus')
def bus_info():
    return render_template("bus.html")


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5000", debug=True)
