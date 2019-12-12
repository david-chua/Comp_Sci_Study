#!/usr/bin/python

import argparse

def find_max_profit(prices):
    next = 1
    highest = prices[next]-prices[0]
    length = len(prices)
    for i in range(0, length - 1):
        # using variable next in order to start at a value after i
        # without the value "next", the j range will always start at 1
        #this is why we increase the next value by 1 after every full j loop. 
        for j in range(next, length):
            profit = prices[j] - prices[i]
            if profit >= highest:
                highest = profit
        next +=1
    return highest


if __name__ == '__main__':
  # This is just some code to accept inputs from the command line
  parser = argparse.ArgumentParser(description='Find max profit from prices.')
  parser.add_argument('integers', metavar='N', type=int, nargs='+', help='an integer price')
  args = parser.parse_args()

  print("A profit of ${profit} can be made from the stock prices {prices}.".format(profit=find_max_profit(args.integers), prices=args.integers))
