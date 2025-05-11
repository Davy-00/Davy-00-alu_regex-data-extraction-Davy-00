#!/usr/bin/env ruby
# Script that extracts sender, receiver, and flags from a log string

log = ARGV[0]

sender = log.match(/\[from:([^\]]+)\]/)[1]
receiver = log.match(/\[to:([^\]]+)\]/)[1]
flags = log.match(/\[flags:([^\]]+)\]/)[1]

puts "#{sender},#{receiver},#{flags}"
