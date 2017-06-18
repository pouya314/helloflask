from flask import Flask, jsonify, render_template, request
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


def add(first_number, second_number):
    """This method adds 2 numbers."""
    return first_number + second_number


@app.route('/_add_numbers', methods = ["POST"])
def add_numbers():
    """Add two numbers server side, ridiculous but well..."""
    a = int(request.json['a'])
    b = int(request.json['b'])
    return jsonify(result=add(a, b))


@app.route('/show_jquery_example')
def show_jquery_example():
    return render_template('jquery_example.html')



if __name__ == "__main__":
    app.run(debug=True)
