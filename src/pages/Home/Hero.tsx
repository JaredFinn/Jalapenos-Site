export const Hero: React.FC = () => {
    return (
        <header className='hero crop'>
            <div className='hero-container'>
                <div className='h-logo' style={{textAlign: 'center'}}>
                    <img src="https://menufyproduction.imgix.net/637371690858159795+284634.png?auto=compress,format&h=1080&w=1920&fit=max" alt="logo" />
                </div>
            <div className='hero-content'>
                    
                    <div className='h-tag'>
                        <h1>Mexican Restaurant</h1>
                    </div>
                    <div className='h-desc'>
                        <p>Come check out some of our unique and delicious menu items like our House Molcajete served in a sizzling stone bowl! Chef Max and the Los Jalapenos Family are committed to serving some of the most amazing food in the Hudson Valley. Available for dine in, take-out, or use our local delivery service Carry-Out Kings.</p>
                    </div>
                <div className='right-column'>
                    <div className='h-form'>
                    </div>
                </div>
            </div>
            </div>
        </header>
    );
};
