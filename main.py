from flask import Flask
from flask import render_template, redirect, url_for

app = Flask(__name__)

user_status = True
user_options = False

@app.route('/')
def index():
    if user_status == False:
        return render_template('not_logged.html',user_status = user_status)
    else:
        return redirect(url_for("chat"))
            

@app.route('/login')
def login():
    return 'login'

@app.route('/register')
def register():
    return 'register'

@app.route('/chat')
def chat():
    if user_status == False:
        return redirect(url_for("index"))
    else:    
        return render_template('chat.html', user_status = user_status, user_options = user_options)  

@app.route('/settings')
def settings():
    return 'settings'  

@app.route('/about')
def about():
    return 'about'    









