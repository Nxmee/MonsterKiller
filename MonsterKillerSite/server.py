from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
	if request.method == 'POST':
		email = request.form['email']
		exists = False
		with open("emails.txt", "r+") as emails:
			for line in emails:
				print email
				print line
				if email.strip().lower() == line.strip().lower():
					exists = True
					print "common"
			if not exists:
				emails.write(email+'\n')
	return render_template('index.html')

app.run(debug=True,port=4000)