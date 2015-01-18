# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts "Creating some seed statuses"

Status.create({
  username: "FluffyJack",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis mollitia vitae pariatur, voluptate inventore ea iusto quisquam sunt nemo odit soluta temporibus deleniti, hic architecto in ipsam dicta! Quibusdam, saepe!"
  })

Status.create({
  username: "HomemadeIcing",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis mollitia vitae pariatur, voluptate inventore ea iusto quisquam sunt nemo odit soluta temporibus deleniti, hic architecto in ipsam dicta! Quibusdam, saepe!"
  })

Status.create({
  username: "JimboJaggins",
  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis mollitia vitae pariatur, voluptate inventore ea iusto quisquam sunt nemo odit soluta temporibus deleniti, hic architecto in ipsam dicta! Quibusdam, saepe!"
  })