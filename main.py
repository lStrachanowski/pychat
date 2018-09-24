from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

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









