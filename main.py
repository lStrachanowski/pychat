from flask import Flask
from flask import render_template

app = Flask(__name__)

user_status = False

@app.route('/')
def index():
    return render_template('not_logged.html', user_status = user_status)

@app.route('/login')
def login():
    return 'login'

@app.route('/register')
def register():
    return 'register'

@app.route('/chat')
def chat():
    return 'chat'    

@app.route('/settings')
def settings():
    return 'settings'  

@app.route('/about')
def about():
    return 'about'    









