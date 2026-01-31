from playwright.sync_api import sync_playwright, expect

def test_dashboard_dark_mode(page):
    # Navigate to the app
    page.goto("http://localhost:8081")

    # Wait for the content to load
    # Look for the title "Old Gym"
    title_locator = page.get_by_text("Old Gym")
    expect(title_locator).to_be_visible(timeout=30000)

    # Take a screenshot
    page.screenshot(path="/home/jules/verification/dashboard_dark_mode.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_dashboard_dark_mode(page)
        finally:
            browser.close()
