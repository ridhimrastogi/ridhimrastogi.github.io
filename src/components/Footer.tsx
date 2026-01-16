'use client'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-text-secondary text-sm">
          © {currentYear} Ridhim Rastogi • Built with{' '}
          <a
            href="https://claude.ai/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Claude Code
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
