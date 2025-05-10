#!/usr/bin/env ruby
# Script that matches a 10 digit phone number exactly

puts ARGV[0].scan(/^\d{10}$/).join
