import React from "react";

export const Map: React.FC = () => {

    return (        
        <div className="map-container" id="location">
            <div className="restaurant-location">
                <h6>Located:</h6>
                <h4 className="address" ><a href='https://goo.gl/maps/2aYVtu5MJZHNTJKt6'>
                    25 N Chestnut St,
                    <br />
                    New Paltz, NY 12561
                </a></h4>
            </div>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.6621464129203!2d-74.08880778526017!3d41.74937968143975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd18829d5b993f%3A0x5caa31cde45323a0!2sLos%20Jalape%C3%B1os!5e0!3m2!1sen!2sus!4v1635296422983!5m2!1sen!2sus" width="800" height="450" loading="lazy"></iframe>
        </div>
    );
}