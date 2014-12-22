require 'rails_helper'

feature "EditingAnArtists", :type => :feature do
  scenario "valid input" do 
    artist = Artist.create(
      first_name: "Miley",
      last_name: "Cyrus"
    )
    user = User.create(
        email: "info@example.com"
        password: "password"
        admin: true
      )

    log_in "info@fluffyjack.com", "password"

    visit artist_path(artist)

    click_link 'edit'
    fill "first_name", with: "Snoop"
    fill "last_name", with: "Lion"
    click_button "Update"

    expect(page).to have_content("Snoop Lion")
  end
  
end