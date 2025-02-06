require "rails_helper"

RSpec.describe OldTeamsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/old_teams").to route_to("old_teams#index")
    end

    it "routes to #show" do
      expect(get: "/old_teams/1").to route_to("old_teams#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/old_teams").to route_to("old_teams#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/old_teams/1").to route_to("old_teams#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/old_teams/1").to route_to("old_teams#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/old_teams/1").to route_to("old_teams#destroy", id: "1")
    end
  end
end
