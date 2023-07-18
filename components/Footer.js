import React from "react";

function Footer() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-4 px-32
                    py-14 bg-gray-100 text-gray-600"
    >
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">about</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">community</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem, ipsum.</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">Host</h5>
        <p>Lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem, ipsum.</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">Support</h5>
        <p>Help center</p>
        <p>Trust & safety</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem, ipsum.</p>
      </div>
    </div>
  );
}

export default Footer;
