require "rails_helper"

RSpec.describe NewTeamsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/new_teams").to route_to("new_teams#index")
    end

    it "routes to #show" do
      expect(get: "/new_teams/1").to route_to("new_teams#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/new_teams").to route_to("new_teams#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/new_teams/1").to route_to("new_teams#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/new_teams/1").to route_to("new_teams#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/new_teams/1").to route_to("new_teams#destroy", id: "1")
    end
  end
end
