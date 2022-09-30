import { useState, useContext } from 'react';
import { ThemeContext, Context } from "./ThemeContext.jsx";

/* Im making a travel blog page that switches themes
i will include: nav bar, hero with an image and a lipsum article, footer
colors will be: light white, forest green, black, and dark theme will be black, forest green, white

what changes --
- background color (white to black)
- body color (black to white)
*/

function App() {
  const [color, toggleTheme] = useContext(Context);
  console.log(color, toggleTheme);

  return (
    <>
      <header>
        <nav>
          <h2>Travlr</h2>
          <ul>
            <li>Spain</li>
            <li>Italy</li>
            <li>Ugunda</li>
          </ul>
        </nav>
        <div className='hero'>
          <h1>Welcome to my travel blog</h1>
          <button onClick={toggleTheme}>toggle theme</button>
        </div>
      </header>
      <main>
        <ThemeContext>
          <article className={`${color}-theme`}>
            <section className="article--body">
              <div className='article'>
                <h3>My journey in <span className='important'>Spain</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec felis vitae sem dapibus volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus purus magna, viverra nec lectus nec, pretium mattis turpis. Nunc laoreet sollicitudin volutpat. Donec non magna lorem. Pellentesque sed erat ut est sodales sodales. Donec ipsum felis, volutpat ut luctus cursus, maximus id lacus. Quisque facilisis lectus quis nunc sagittis, quis interdum risus dictum. Donec id enim malesuada, rutrum nibh vitae, sagittis orci. Nulla venenatis lectus ut neque rutrum, sed ullamcorper diam rutrum. In ullamcorper nulla volutpat augue cursus, vitae blandit tortor dignissim.</p>
                <p>Maecenas blandit auctor ante sit amet laoreet. Morbi pulvinar in orci nec consequat. Donec vehicula nec ante lacinia facilisis. Cras dignissim erat auctor diam porttitor, vel euismod lacus hendrerit. Morbi purus metus, luctus sit amet auctor at, porttitor sed mauris. Fusce finibus, ante sit amet semper egestas, dui dui gravida tortor, in sodales mi diam eget orci. Vivamus ac elit nec massa laoreet tristique quis nec velit. Mauris imperdiet rhoncus libero sed scelerisque. Etiam aliquam erat orci, eget vehicula ipsum sagittis id. Cras imperdiet, lorem nec efficitur dapibus, est lectus blandit dolor, a rutrum nibh lectus ac ligula. Ut pretium leo a dapibus fermentum. Maecenas condimentum erat eget dolor vehicula, ut venenatis leo placerat. Maecenas efficitur vulputate tortor interdum vehicula. Sed nec tristique risus. Etiam lacus sem, pellentesque in lorem consectetur, pharetra ornare nulla.</p>
                <p>Phasellus facilisis scelerisque commodo. Praesent vehicula odio at suscipit pretium. Donec sit amet dolor mauris. Quisque molestie dui et dui pulvinar varius. Etiam quis odio ex. Aliquam vitae pulvinar justo. Nulla ut sagittis turpis. Vestibulum vestibulum, lectus in volutpat porta, augue lorem iaculis libero, vehicula rhoncus turpis justo id enim. In sit amet aliquam tortor, id hendrerit mauris. In scelerisque fermentum odio non imperdiet. Praesent semper urna sagittis ornare porttitor. Proin a quam vel ipsum lacinia mattis. Aenean id iaculis leo. Vestibulum bibendum, est sit amet hendrerit molestie, quam nulla tincidunt ante, at scelerisque velit tellus in felis.</p>
                <p>Aliquam erat volutpat. Nulla id ornare lectus. Quisque at mattis orci. Ut ac augue et odio suscipit convallis. Fusce quis elit magna. Nunc ultricies nulla vel augue tempus malesuada. Aliquam erat volutpat. Integer non feugiat tortor. Nullam eleifend eleifend commodo. Suspendisse eget elementum lectus, eget placerat massa. Mauris non nisi nec diam lobortis interdum a ut nisl.</p>
                <p>Vestibulum et consequat justo. Quisque ultrices massa id lacus sollicitudin, nec venenatis metus elementum. Quisque et eros sit amet arcu sagittis molestie condimentum ac ligula. Sed eleifend dui mauris, sed hendrerit turpis vehicula in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet diam ut massa euismod lobortis in ut dolor. Praesent blandit, neque nec posuere rhoncus, augue lectus accumsan nisl, vel consequat turpis erat at nisi. Proin facilisis risus nec tincidunt vehicula. Nam sed cursus ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ac tortor sed lectus fringilla varius. Phasellus posuere id nibh eget scelerisque. Sed eleifend, sapien sit amet ultricies tristique, nibh mauris consectetur ex, ac rutrum tortor purus egestas mi. Morbi lacinia odio eget augue mollis viverra.</p>
              </div>
              <section className="card light-theme">
                <p>Nulla non turpis eget tortor aliquam dapibus et nec diam. Sed tempor eros nunc, nec porta nibh convallis quis. Nullam ornare mi vel congue tincidunt. Nunc in libero ac turpis maximus facilisis in eget lacus. Integer eu lorem neque. Ut tempus enim nulla, nec laoreet dolor bibendum a. Mauris in metus ante.</p>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Sed porttitor metus in tellus finibus dapibus.</li>
                  <li>In laoreet odio ut nisl eleifend aliquet.</li>
                  <li>Nam pharetra elit non purus convallis ultricies.</li>
                  <li>Nullam ut ligula id neque posuere mollis nec eget nisl.</li>
                </ul>
              </section>
            </section>
            <div style={{ textAlign: "center" }} className="img-container"><img src='https://images.unsplash.com/photo-1664261934197-c71d92027f5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80' alt='ponies' /></div>
          </article >
        </ThemeContext>
      </main>
      <footer>
        <p>© copyright</p>
      </footer>

    </>
  );
}

export default App;
