function setTheme(theme){
    const root = document.documentElement;
    if (theme==='halloween'){
        root.style.setProperty('background','var(--bg-color-halloween)');
        root.style.setProperty('color','var(--text-color-halloween)');
    }
    else{
        root.style.setProperty('background','var(--bg-color-normal)');
        root.style.setProperty('color','var(--text-color-normal)');
    }
}

function toggleTheme(){
    // console.log('clicked checkbox');
    const currTheme = localStorage.getItem('theme') || 'normal';
    let newTheme = '';
    if (currTheme==='normal'){
        newTheme = 'halloween';
    }
    else {
        newTheme='normal';
    }
    // const newTheme = currTheme==='normal'?'halloween':'normal';
    localStorage.setItem('theme',newTheme);
    setTheme(newTheme);
}

function setSavedTheme(){
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
        setTheme(savedTheme);
        document.getElementById('themeToggle').checked = savedTheme==='halloween';
    }
}

document.addEventListener('DOMContentLoaded', setSavedTheme);