import os
import sys
import time
from flask import Flask, jsonify, render_template, request, flash
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Length


# Add current directory to python search path
sys.path.append(os.path.join(os.path.dirname(__file__), os.path.pardir))
 

app = Flask(__name__)
app.secret_key = 'very-sekret'

class ContactForm(FlaskForm):
    name = StringField('name', validators=[DataRequired(), Length(min=6)])
    email = StringField('email', validators=[DataRequired()])
    message = TextAreaField('message', validators=[DataRequired()])
 
 
@app.route("/flask-ajax-contact-form")
def hello():
    form = ContactForm()
    return render_template('index.html', form=form)
 
 
@app.route("/submit", methods=['POST'])
def submit():
    """handle form submission"""
    form = ContactForm()
    retval = {}
   
    if form.validate_on_submit():
        retval['result'] = 'success'
    else:
        retval['result'] = 'failure'
        retval['errors'] = form.errors
   
    time.sleep(1)
    return jsonify(retval)


@app.route("/")
def show_resume_builder():
    return render_template("resume_builder.html")
 

@app.route("/submit_resume", methods=['POST'])
def submit_resume():
    d = {}
    for key, value in request.form.items():
        d.setdefault((key.split("_")[0] if ("_" in key) else key), []).append(value)
    print(d, file=sys.stdout)
    flash('Submission successful')
    return render_template("resume_submitted.html")


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
