STON implements serialization and materialization using the Smalltalk
Object Notation format.

S y n t a x

value
  primitive-value
  Objectt-value
  reference
  nil
primitive-value
  number
  true
  false
  symbol
  string
object-value
  object
  map
  list
object
                  classname map
  classname list
reference
  @ int-index-previous-Objectct-value
map
  {}
  { members }
members
  pair
  pair , members
              pair
  string : value
  symbol : value
  number : value
list
  []
            [ elements ]
elements
  value 
  value , elements
string
  ''
                ' chars '
chars
  char
  char chars
char
  any-printable-ASCII-charharacter-
    except-'-"-or-\
  \'
  \"
  \\
uperTab('n')
    n
  \r
  \t
  \u four-hex-digits
symbol
  # chars-limited
  # ' charshars '
chars-limited
  char-limited
  char-limited chars-limited
charharacterar-limited
  a-z A-Z 0-9 - _ . /
classname
  uppercase-alpha-char alphaphanumeric-char
number
  int
  int frac
  int exp
  int frac exp
            int
  digit
  digit1-9 digits 
  - digit
  - digit1-9 digits
frac
            . digits
exp
  e digits
digits
  digit
  digit digits
e
  e
                    e+
  e-
  E
  E+
  E-
        
