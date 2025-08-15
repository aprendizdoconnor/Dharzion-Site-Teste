(() => {
  function veioDosSimulators() {
    const ref = document.referrer;
    if (!ref) return false;
    try {
      const r = new URL(ref);
     
      const mesmaOrigem = r.origin === window.location.origin || ref.startsWith("file:");
      return mesmaOrigem && /\/simulators\.html(\?|#|$)/.test(r.pathname);
    } catch {
      return false;
    }
  }

  function onClick(e) {
    
    if (history.length > 1 && veioDosSimulators()) {
      e.preventDefault();
      history.back();
    }

  }

  const btn = document.getElementById("btnVoltar");
  if (btn) btn.addEventListener("click", onClick);
})();
