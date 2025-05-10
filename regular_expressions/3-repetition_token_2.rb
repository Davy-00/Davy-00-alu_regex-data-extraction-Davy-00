#!/usr/bin/env ruby
# Script that matches zero or one occurrence of 'School' in the input argument

puts ARGV[0].scan(/School?/).join
