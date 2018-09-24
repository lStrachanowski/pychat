from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return 'index'

@app.route('/login')
def login():
    return 'login'

@app.route('/register')
def register():
    return 'register'

@app.route('/chat')
def chat():
    return 'chat'    

@app.route('/register')
def register():
    return 'register'  

@app.route('/about')
def about():
    return 'about'    









