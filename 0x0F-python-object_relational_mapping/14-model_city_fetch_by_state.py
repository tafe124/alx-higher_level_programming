#!/usr/bin/python3
""" script that prints all the City objects """


from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import sys
from model_state import Base, State
from model_city import City


if __name__ == '__main__':
    h = 'localhost'
    u = sys.argv[1]
    pas = sys.argv[2]
    db_n = sys.argv[3]
    p = 3306
    eng = create_engine('mysql+mysqldb://{}:{}@{}:{}/{}'.format(
          u, pas, h, p, db_n))

    Session = sessionmaker(bind=eng)
    r = Session().query(City, State).join(State)

    for city, state in r:
        print("{}: ({})  {}".format(state.name, city.id, city.name))
