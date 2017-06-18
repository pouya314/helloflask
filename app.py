from flask import Flask, request, render_template
import sys
 

app = Flask(__name__)


@app.route("/")
def homepage():
    return render_template("hello.html")
 

@app.route("/add_entry", methods=['POST'])
def add_entry():
    d = {}
    for key, value in request.form.items():
        d.setdefault((key.split("_")[0] if ("_" in key) else key), []).append(value)
    print(d, file=sys.stdout)
    return render_template("ok.html")


if __name__ == "__main__":
    app.run(debug=True)
