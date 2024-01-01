from termcolor import colored

def print_title():
    title = " Xianxia Simulator "
    colored_title = colored(title, 'yellow', attrs=['bold'])
    print(colored_title)

# Print the title
print_title()
