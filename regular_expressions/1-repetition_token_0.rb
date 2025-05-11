#!/usr/bin/env ruby
# Script that matches zero or more occurrences of 't' in the input argument

puts ARGV[0].scan(/t*/).join
