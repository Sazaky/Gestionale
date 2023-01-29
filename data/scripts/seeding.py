
import sqlite3
from sqlite3 import Error


def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)

    return conn

def execute_sql_script(script, db_connection):
    # Open and read the file as a single buffer
    fd = open(script, 'r')
    commands = fd.read()
    fd.close()

    cursor = db_connection.cursor()

    # all SQL commands (split on ';')
    commands = commands.split(';')

    # Execute every command from the input file
    for command in commands:
        # This will skip and report errors
        # For example, if the tables do not yet exist, this will skip over
        # the DROP TABLE commands
        try:
            cursor.execute(command)
        except (OperationalError, msg):
            print("Command skipped: ", msg)

if __name__ == '__main__':
    my_conn = create_connection(r"../medicalsales.db")
    execute_sql_script("create_table_doctor.sql", my_conn)
    execute_sql_script("seed_doctors.sql", my_conn)
    c = my_conn.cursor()
    results = c.execute("select * from doctor")
    print(results.fetchall())