/* @ds-bundle: {"format":4,"namespace":"FiskaregRdenDesignSystem_4b654f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"28506d71d319","components/core/Button.jsx":"5ee27e880948","components/core/Card.jsx":"5327742a12ad","components/core/Input.jsx":"d89353c074d6","components/core/Tag.jsx":"bec5d6d4adca"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FiskaregRdenDesignSystem_4b654f = window.FiskaregRdenDesignSystem_4b654f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  variant = 'default'
}) {
  const styles = {
    default: {
      background: 'var(--color-stone-100)',
      color: 'var(--text-secondary)'
    },
    accent: {
      background: 'var(--accent-muted)',
      color: 'var(--accent-primary)'
    },
    dark: {
      background: 'var(--color-stone-800)',
      color: 'var(--color-white)'
    },
    sage: {
      background: 'var(--color-sage-100)',
      color: 'var(--color-sage-500)'
    }
  };
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      display: 'inline-block',
      lineHeight: 1.6,
      ...styles[variant]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false
}) {
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: 'var(--tracking-wider)',
    textTransform: 'uppercase',
    fontSize: size === 'sm' ? '11px' : size === 'lg' ? '13px' : '12px',
    padding: size === 'sm' ? '10px 20px' : size === 'lg' ? '18px 40px' : '13px 28px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    transition: 'background 180ms ease, color 180ms ease, border-color 180ms ease, transform 120ms ease',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--color-white)',
      borderColor: 'var(--accent-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'transparent',
      padding: size === 'sm' ? '10px 0' : '13px 0'
    },
    inverse: {
      background: 'transparent',
      color: 'var(--color-white)',
      borderColor: 'rgba(255,255,255,0.5)'
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  const tag = href ? 'a' : 'button';
  return React.createElement(tag, {
    href,
    onClick: disabled ? undefined : onClick,
    disabled: tag === 'button' ? disabled : undefined,
    style,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-primary-hover)';
      if (variant === 'secondary') e.currentTarget.style.background = 'var(--bg-subtle)';
      if (variant === 'ghost') e.currentTarget.style.color = 'var(--accent-primary)';
      if (variant === 'inverse') e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
    },
    onMouseLeave: e => {
      if (disabled) return;
      Object.assign(e.currentTarget.style, variants[variant]);
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  image,
  label,
  title,
  subtitle,
  meta,
  href,
  aspectRatio = '3/2'
}) {
  const [hovered, setHovered] = React.useState(false);
  return React.createElement('a', {
    href: href || '#',
    style: {
      display: 'block',
      textDecoration: 'none',
      color: 'inherit',
      cursor: 'pointer'
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, React.createElement('div', {
    style: {
      position: 'relative',
      aspectRatio,
      overflow: 'hidden',
      borderRadius: 'var(--radius-md)',
      marginBottom: '20px',
      background: 'var(--color-stone-100)'
    }
  }, image && React.createElement('img', {
    src: image,
    alt: title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 500ms cubic-bezier(0.25,0,0.1,1)',
      transform: hovered ? 'scale(1.04)' : 'scale(1)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(20,18,16,0.28) 0%, transparent 60%)'
    }
  })), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--accent-primary)'
    }
  }, label), title && React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '22px',
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      margin: 0,
      transition: 'color 180ms ease',
      color: hovered ? 'var(--accent-primary)' : 'var(--text-primary)'
    }
  }, title), subtitle && React.createElement('p', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      fontWeight: 300,
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, subtitle), meta && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 400,
      color: 'var(--text-muted)',
      letterSpacing: '0.04em'
    }
  }, meta)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  name,
  required = false,
  hint
}) {
  const [focused, setFocused] = React.useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%'
    }
  }, label && React.createElement('label', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label, required && React.createElement('span', {
    style: {
      color: 'var(--accent-primary)',
      marginLeft: '4px'
    }
  }, '*')), React.createElement('input', {
    type,
    name,
    placeholder,
    value,
    onChange,
    required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      fontWeight: 300,
      color: 'var(--text-primary)',
      background: 'var(--bg-surface)',
      border: '1px solid',
      borderColor: focused ? 'var(--text-primary)' : 'var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '13px 16px',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      transition: 'border-color 180ms ease',
      '::placeholder': {
        color: 'var(--text-muted)'
      }
    }
  }), hint && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 300,
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  active = false,
  onClick
}) {
  const [hovered, setHovered] = React.useState(false);
  return React.createElement('button', {
    onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      padding: '8px 16px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid',
      borderColor: active ? 'var(--text-primary)' : hovered ? 'var(--color-stone-400)' : 'var(--border-default)',
      background: active ? 'var(--text-primary)' : 'transparent',
      color: active ? 'var(--color-white)' : hovered ? 'var(--text-primary)' : 'var(--text-secondary)',
      cursor: 'pointer',
      transition: 'all 180ms ease',
      lineHeight: 1
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
