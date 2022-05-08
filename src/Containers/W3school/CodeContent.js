const exampleHTML = <span style={{ color: 'brown' }}>
    <span style={{ color: 'mediumblue' }}>{'<'}</span>{'!DOCTYPE'}
    <span style={{ color: 'red' }}> html</span>
    <span style={{ color: 'mediumblue' }}>{'>'}</span>
    <br />
    <span style={{ color: 'brown' }}>
        <span style={{ color: 'mediumblue' }}>{'<'}</span>
        html<span style={{ color: 'mediumblue' }}>{'>'}</span>
    </span><br />
    <span style={{ color: 'brown' }}>
        <span style={{ color: 'mediumblue' }}>{'<'}</span>
        title<span style={{ color: 'mediumblue' }}>{'>'}</span>
    </span>HTML Tutorial<span style={{ color: 'brown' }}>
        <span style={{ color: 'mediumblue' }}>{'<'}</span>
        /title<span style={{ color: 'mediumblue' }}>{'>'}</span>
    </span><br />
    <span style={{ color: 'brown' }}>
        <span style={{ color: 'mediumblue' }}>{'<'}</span>
        body<span style={{ color: 'mediumblue' }}>{'>'}</span>
    </span><br /><br />
    <span style={{ color: 'brown' }}>
        <span style={{ color: 'mediumblue' }}>{'<'}</span>
        h1<span style={{ color: 'mediumblue' }}>{'>'}</span>
    </span>This is a heading
    <span style={{ color: 'brown' }}>
        <span style={{ color: 'mediumblue' }}>{'<'}</span>{'/ h1'}
        <span style={{ color: 'mediumblue' }}>{'>'}</span></span><br />
    <span style={{ color: 'brown' }}>
        <span style={{ color: 'mediumblue' }}>{'<'}</span>
        p<span style={{ color: 'mediumblue' }}>{'>'}</span>
    </span>This is a paragraph
    <span style={{ color: 'brown' }}>
        <span style={{ color: 'mediumblue' }}>{'<'}</span> {'/p'}
        <span style={{ color: 'mediumblue' }}> {'>'}</span></span><br /><br />
    <span style={{ color: 'brown' }}>
        <span style={{ color: 'mediumblue' }}>{'<'}</span>
        {'/body'}<span style={{ color: 'mediumblue' }}>{'>'}</span></span><br />
    <span style={{ color: 'brown' }}>
        <span style={{ color: 'mediumblue' }}>{'<'}</span>{'/html'}
        <span style={{ color: 'mediumblue' }}>{'>'}</span></span></span>;


const exampleCSS = <span style={{ color: 'brown' }}>
    body <span style={{ color: 'black' }}>{'{'}</span>
    <span style={{ color: 'red' }}><br />
        &nbsp; background-color
        <span style={{ color: 'mediumblue' }}>
            <span style={{ color: 'black' }}>:</span> lightblue
            <span style={{ color: 'black' }}>;</span>
        </span><br />
    </span>
    <span style={{ color: 'black' }}>{'}'}</span><br /><br />
    h1 <span style={{ color: 'black' }}>{'{'}</span>
    <span style={{ color: 'red' }}><br />
        &nbsp; color<span style={{ color: 'mediumblue' }}>
            <span style={{ color: 'black' }}>:</span>
            white<span style={{ color: 'black' }}>;</span>
        </span><br />
        &nbsp; text-align
        <span style={{ color: 'mediumblue' }}>
            <span style={{ color: 'black' }}>:</span>
            center<span style={{ color: 'black' }}>;</span>
        </span><br /></span>
    <span style={{ color: 'black' }}>{'}'}</span>
</span>;

const exampleJavascript = <span style={{ color: 'brown' }}>
    <span style={{ color: 'mediumblue' }}>{'<'}</span>button
    <span style={{ color: 'red' }}> onclick<span
        style={{ color: 'mediumblue' }}>=myFunction()</span></span><span
            style={{ color: 'mediumblue' }}>{'>'}</span>{'Click Me!'}<span style={{ color: 'brown' }}><span
                style={{ color: 'mediumblue' }}>{'<'}</span>/button<span
                    style={{ color: 'mediumblue' }}>{'>'}</span></span><br /><br />
    <span style={{ color: 'brown' }}><span style={{ color: 'mediumblue' }}>{'<'}</span>script<span
        style={{ color: 'mediumblue' }}>{'>'}</span></span><span style={{ color: 'black' }}><br />
        <span style={{ color: 'mediumblue' }}>function</span> myFunction()
        {'{'} <br /><span style={{ color: 'red' }}>
        </span> &nbsp; <span style={{ color: 'mediumblue' }}>let</span> x =
        document.<span className="jspropertycolor" style={{ color: 'black' }}>getElementById</span>(<span
            style={{ color: 'brown' }}>"demo"</span>);<br /><span style={{ color: 'red' }}>
        </span>&nbsp; x.<span className="jspropertycolor" style={{ color: 'black' }}>style</span>.<span
            className="jspropertycolor" style={{ color: 'black' }}>fontSize</span> = <span
                style={{ color: 'brown' }}>"25px"</span>; <br /><span style={{ color: 'red' }}>
        </span>&nbsp; x.<span className="jspropertycolor" style={{ color: 'black' }}>style</span>.<span
            className="jspropertycolor" style={{ color: 'black' }}>color</span> = <span
                style={{ color: 'brown' }}>"red"</span>; <br />{'}'}<br />
    </span><span style={{ color: 'brown' }}><span style={{ color: 'mediumblue' }}>{'<'}</span>/script<span
        style={{ color: 'mediumblue' }}>{'>'}</span></span></span>;

const examplePython = <span style={{ color: 'black' }}><span style={{ color: 'red' }}>
</span> <span style={{ color: 'mediumblue' }}>if</span> <span style={{ color: 'red' }}>5</span> {'>'}
    <span style={{ color: 'red' }}>2</span>:<br />&nbsp; print(<span style={{ color: 'brown' }}>"Five is
        greater than two!"</span>)<span style={{ color: 'red' }}>
    </span> </span>;


export { examplePython, exampleJavascript, exampleCSS, exampleHTML };