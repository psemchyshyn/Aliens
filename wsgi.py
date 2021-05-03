from aliens import create_app, db
# from flask import with_appcontext
app = create_app()

@app.cli.command("drop-tables")
def droptables():
    db.drop_all()


@app.cli.command("create-db")
def createdb():
    db.create_all()


if __name__ == "__main__":
    app.run(debug=True)
