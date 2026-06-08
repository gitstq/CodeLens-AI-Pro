/* ============================================================
   CodeLens-AI - Main Application
   Pure frontend code analysis engine, UI interactions,
   chart rendering, and i18n system
   ============================================================ */

(function () {
  'use strict';

  // ==================== I18n System ====================
  const I18N = {
    current: 'zh-CN',
    data: {
      'zh-CN': {
        appName: 'CodeLens-AI',
        tagline: '智能代码审查与质量分析',
        pasteCode: '粘贴代码',
        uploadFile: '上传文件',
        analyze: '开始分析',
        clear: '清除',
        exportReport: '导出报告',
        darkMode: '深色模式',
        lightMode: '浅色模式',
        language: '语言',
        detectedLang: '检测语言',
        linesCount: '行数',
        charsCount: '字符数',
        overallScore: '总体评分',
        securityScore: '安全评分',
        qualityScore: '质量评分',
        complexityScore: '复杂度评分',
        bestPracticeScore: '最佳实践评分',
        scoreChart: '评分概览',
        radarChart: '维度分析',
        pieChart: '问题分布',
        issuesList: '问题列表',
        searchIssues: '搜索问题...',
        filterAll: '全部',
        filterCritical: '严重',
        filterHigh: '高危',
        filterMedium: '中等',
        filterLow: '低危',
        filterInfo: '提示',
        noIssues: '未发现问题',
        noIssuesDesc: '代码质量良好，没有检测到明显问题。',
        dropHere: '拖拽文件到此处',
        line: '行',
        col: '列',
        category: '类别',
        security: '安全',
        codeSmell: '代码异味',
        complexity: '复杂度',
        bestPractice: '最佳实践',
        excellent: '优秀',
        good: '良好',
        warning: '警告',
        poor: '较差',
        analyzing: '分析中...',
        enterCode: '在此粘贴代码，或拖拽文件上传...',
        fileUploaded: '文件已上传',
        issuesFound: '个问题',
        noCode: '请输入或上传代码后再进行分析',
        exportSuccess: '报告已导出',
        theme: '主题',
        // Security issues
        hardcodedPassword: '硬编码密码',
        hardcodedKey: '硬编码密钥/令牌',
        sqlInjection: 'SQL注入风险',
        xssRisk: 'XSS跨站脚本风险',
        cmdInjection: '命令注入风险',
        insecureDeserialization: '不安全的反序列化',
        weakCrypto: '弱加密算法',
        sensitiveInfoLeak: '敏感信息泄露',
        evalUsage: '使用eval()存在安全风险',
        innerHtml: '使用innerHTML存在XSS风险',
        hardcodedIp: '硬编码IP地址',
        hardcodedPort: '硬编码端口号',
        pathTraversal: '路径遍历风险',
        insecureRandom: '不安全的随机数生成',
        openRedirect: '开放重定向风险',
        // Code smells
        longFunction: '函数过长',
        deepNesting: '嵌套层级过深',
        duplicateCode: '疑似重复代码',
        magicNumber: '魔法数字',
        largeFile: '文件过大',
        deadCode: '疑似死代码',
        tooManyParams: '函数参数过多',
        longLine: '行过长',
        godClass: '类/对象过于复杂',
        // Complexity
        highCyclomatic: '圈复杂度过高',
        highCognitive: '认知复杂度过高',
        // Best practices
        namingConvention: '命名不规范',
        noComments: '缺少注释',
        noErrorHandling: '缺少错误处理',
        todoFixme: '包含TODO/FIXME标记',
        consoleLog: '调试日志未清除',
        varUsage: '建议使用let/const替代var',
        anyType: '使用any类型降低了类型安全性',
        noStrict: '建议启用严格模式',
      },
      'zh-TW': {
        appName: 'CodeLens-AI',
        tagline: '智慧程式碼審查與品質分析',
        pasteCode: '貼上程式碼',
        uploadFile: '上傳檔案',
        analyze: '開始分析',
        clear: '清除',
        exportReport: '匯出報告',
        darkMode: '深色模式',
        lightMode: '淺色模式',
        language: '語言',
        detectedLang: '偵測語言',
        linesCount: '行數',
        charsCount: '字元數',
        overallScore: '總體評分',
        securityScore: '安全評分',
        qualityScore: '品質評分',
        complexityScore: '複雜度評分',
        bestPracticeScore: '最佳實踐評分',
        scoreChart: '評分概覽',
        radarChart: '維度分析',
        pieChart: '問題分佈',
        issuesList: '問題清單',
        searchIssues: '搜尋問題...',
        filterAll: '全部',
        filterCritical: '嚴重',
        filterHigh: '高危',
        filterMedium: '中等',
        filterLow: '低危',
        filterInfo: '提示',
        noIssues: '未發現問題',
        noIssuesDesc: '程式碼品質良好，沒有偵測到明顯問題。',
        dropHere: '拖曳檔案到此處',
        line: '行',
        col: '列',
        category: '類別',
        security: '安全',
        codeSmell: '程式碼異味',
        complexity: '複雜度',
        bestPractice: '最佳實踐',
        excellent: '優秀',
        good: '良好',
        warning: '警告',
        poor: '較差',
        analyzing: '分析中...',
        enterCode: '在此貼上程式碼，或拖曳檔案上傳...',
        fileUploaded: '檔案已上傳',
        issuesFound: '個問題',
        noCode: '請輸入或上傳程式碼後再進行分析',
        exportSuccess: '報告已匯出',
        theme: '主題',
        hardcodedPassword: '硬編碼密碼',
        hardcodedKey: '硬編碼密鑰/令牌',
        sqlInjection: 'SQL注入風險',
        xssRisk: 'XSS跨站腳本風險',
        cmdInjection: '命令注入風險',
        insecureDeserialization: '不安全的反序列化',
        weakCrypto: '弱加密演算法',
        sensitiveInfoLeak: '敏感資訊洩露',
        evalUsage: '使用eval()存在安全風險',
        innerHtml: '使用innerHTML存在XSS風險',
        hardcodedIp: '硬編碼IP位址',
        hardcodedPort: '硬編碼連接埠號',
        pathTraversal: '路徑遍歷風險',
        insecureRandom: '不安全的隨機數生成',
        openRedirect: '開放重定向風險',
        longFunction: '函式過長',
        deepNesting: '嵌套層級過深',
        duplicateCode: '疑似重複程式碼',
        magicNumber: '魔法數字',
        largeFile: '檔案過大',
        deadCode: '疑似死程式碼',
        tooManyParams: '函式參數過多',
        longLine: '行過長',
        godClass: '類別/物件過於複雜',
        highCyclomatic: '圈複雜度過高',
        highCognitive: '認知複雜度過高',
        namingConvention: '命名不規範',
        noComments: '缺少註釋',
        noErrorHandling: '缺少錯誤處理',
        todoFixme: '包含TODO/FIXME標記',
        consoleLog: '除錯日誌未清除',
        varUsage: '建議使用let/const替代var',
        anyType: '使用any類型降低了類型安全性',
        noStrict: '建議啟用嚴格模式',
      },
      'en': {
        appName: 'CodeLens-AI',
        tagline: 'Intelligent Code Review & Quality Analysis',
        pasteCode: 'Paste Code',
        uploadFile: 'Upload File',
        analyze: 'Analyze',
        clear: 'Clear',
        exportReport: 'Export Report',
        darkMode: 'Dark Mode',
        lightMode: 'Light Mode',
        language: 'Language',
        detectedLang: 'Detected',
        linesCount: 'Lines',
        charsCount: 'Chars',
        overallScore: 'Overall Score',
        securityScore: 'Security',
        qualityScore: 'Quality',
        complexityScore: 'Complexity',
        bestPracticeScore: 'Best Practices',
        scoreChart: 'Score Overview',
        radarChart: 'Dimension Analysis',
        pieChart: 'Issue Distribution',
        issuesList: 'Issues List',
        searchIssues: 'Search issues...',
        filterAll: 'All',
        filterCritical: 'Critical',
        filterHigh: 'High',
        filterMedium: 'Medium',
        filterLow: 'Low',
        filterInfo: 'Info',
        noIssues: 'No Issues Found',
        noIssuesDesc: 'Code quality looks good. No significant issues detected.',
        dropHere: 'Drop files here',
        line: 'Line',
        col: 'Col',
        category: 'Category',
        security: 'Security',
        codeSmell: 'Code Smell',
        complexity: 'Complexity',
        bestPractice: 'Best Practice',
        excellent: 'Excellent',
        good: 'Good',
        warning: 'Warning',
        poor: 'Poor',
        analyzing: 'Analyzing...',
        enterCode: 'Paste code here, or drag & drop a file...',
        fileUploaded: 'File uploaded',
        issuesFound: 'issues',
        noCode: 'Please enter or upload code before analyzing',
        exportSuccess: 'Report exported',
        theme: 'Theme',
        hardcodedPassword: 'Hardcoded password',
        hardcodedKey: 'Hardcoded key/token',
        sqlInjection: 'SQL injection risk',
        xssRisk: 'XSS vulnerability risk',
        cmdInjection: 'Command injection risk',
        insecureDeserialization: 'Insecure deserialization',
        weakCrypto: 'Weak cryptographic algorithm',
        sensitiveInfoLeak: 'Sensitive information leak',
        evalUsage: 'eval() usage is a security risk',
        innerHtml: 'innerHTML usage is an XSS risk',
        hardcodedIp: 'Hardcoded IP address',
        hardcodedPort: 'Hardcoded port number',
        pathTraversal: 'Path traversal risk',
        insecureRandom: 'Insecure random number generation',
        openRedirect: 'Open redirect risk',
        longFunction: 'Function too long',
        deepNesting: 'Nesting too deep',
        duplicateCode: 'Suspected duplicate code',
        magicNumber: 'Magic number',
        largeFile: 'File too large',
        deadCode: 'Suspected dead code',
        tooManyParams: 'Too many parameters',
        longLine: 'Line too long',
        godClass: 'Class/object too complex',
        highCyclomatic: 'Cyclomatic complexity too high',
        highCognitive: 'Cognitive complexity too high',
        namingConvention: 'Naming convention violation',
        noComments: 'Missing comments',
        noErrorHandling: 'Missing error handling',
        todoFixme: 'Contains TODO/FIXME markers',
        consoleLog: 'Debug logs not removed',
        varUsage: 'Consider using let/const instead of var',
        anyType: 'Using any reduces type safety',
        noStrict: 'Consider enabling strict mode',
      }
    },

    /** Get translated string */
    t(key) {
      return (this.data[this.current] && this.data[this.current][key]) || this.data['en'][key] || key;
    },

    /** Set language */
    setLang(lang) {
      if (this.data[lang]) {
        this.current = lang;
        document.documentElement.setAttribute('data-lang', lang);
      }
    }
  };

  // ==================== Language Detection ====================
  const LanguageDetector = {
    patterns: [
      { lang: 'HTML', regex: /<!DOCTYPE\s+html|<html[\s>]|<head[\s>]|<body[\s>]|<div[\s>]|<span[\s>]/i, extensions: ['.html', '.htm'] },
      { lang: 'CSS', regex: /@[a-z-]+\s*\{|[\w-]+\s*:\s*[^;]+;|\.([\w-]+)\s*\{/i, extensions: ['.css', '.scss', '.less'] },
      { lang: 'JSON', regex: /^\s*[\{\[]/, extensions: ['.json'], validate: (code) => { try { JSON.parse(code); return true; } catch { return false; } } },
      { lang: 'YAML', regex: /^[\w-]+(\s*:\s*|\s+:\s+)/m, extensions: ['.yml', '.yaml'] },
      { lang: 'SQL', regex: /\b(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|FROM|WHERE|JOIN|GROUP BY|ORDER BY)\b/i, extensions: ['.sql'] },
      { lang: 'Shell', regex: /^#!\s*\/bin\/(bash|sh|zsh)|\$\(|`[^`]+`|^\s*(export|echo|if\s+|fi|done|while|for)\s/i, extensions: ['.sh', '.bash', '.zsh'] },
      { lang: 'Python', regex: /\b(import|from|def|class|if\s+__name__|print|elif|lambda|yield|async\s+def|with\s+open)\b/i, extensions: ['.py', '.pyw'] },
      { lang: 'TypeScript', regex: /\b(interface|type\s+\w+|enum|namespace|declare|as\s+\w+|<\w+>|readonly|implements)\b/i, extensions: ['.ts', '.tsx'] },
      { lang: 'JavaScript', regex: /\b(function|const|let|var|=>|require|module\.exports|async\s+function|await|class\s+\w+\s*\{)\b/i, extensions: ['.js', '.jsx', '.mjs'] },
      { lang: 'Go', regex: /\b(package|func\s+\(|import\s*\(|fmt\.Print|go\s+func|chan\s|defer\s|range\s)\b/i, extensions: ['.go'] },
      { lang: 'Rust', regex: /\b(fn\s+\w+|let\s+mut|impl\s|pub\s+fn|use\s+std|::|match\s|enum\s|struct\s)\b/i, extensions: ['.rs'] },
      { lang: 'Java', regex: /\b(public|private|protected)\s+(class|interface|void|static)\b|\b(System\.out|import\s+java\.)\b/i, extensions: ['.java'] },
      { lang: 'C++', regex: /#include\s*[<"]|std::|cout\s*<<|cin\s*>>|\b(class\s+\w+|template\s*<|namespace\s)\b/i, extensions: ['.cpp', '.cc', '.cxx', '.hpp', '.h'] },
      { lang: 'PHP', regex: /<\?php|\$\w+\s*=|->\w+\(|function\s+\w+\s*\(|echo\s|namespace\s+/i, extensions: ['.php'] },
      { lang: 'Ruby', regex: /\b(def\s+\w+|class\s+\w+|module\s+\w+|require\s|puts\s|end\b|do\s*\||attr_)/i, extensions: ['.rb'] },
      { lang: 'Swift', regex: /\b(import\s+UIKit|func\s+\w+|var\s+\w+\s*:|let\s+\w+\s*:|guard\s+let|@IBOutlet|@IBAction|protocol\s)/i, extensions: ['.swift'] },
      { lang: 'Kotlin', regex: /\b(fun\s+\w+|val\s+\w+|var\s+\w+|when\s*\(|companion\s+object|data\s+class|sealed\s+class|import\s+kotlin)/i, extensions: ['.kt', '.kts'] },
    ],

    /** Detect language from code content and optional filename */
    detect(code, filename) {
      // Try filename extension first
      if (filename) {
        const ext = '.' + filename.split('.').pop().toLowerCase();
        for (const p of this.patterns) {
          if (p.extensions.includes(ext)) return p.lang;
        }
      }
      // Try regex patterns
      for (const p of this.patterns) {
        if (p.regex.test(code)) {
          if (p.validate) {
            if (p.validate(code)) return p.lang;
          } else {
            return p.lang;
          }
        }
      }
      return 'Unknown';
    }
  };

  // ==================== Code Analysis Engine ====================
  const AnalysisEngine = {
    /** Main analysis entry point */
    analyze(code, language) {
      const lines = code.split('\n');
      const issues = [];
      const metrics = { lines: lines.length, chars: code.length, blankLines: 0, commentLines: 0, codeLines: 0 };

      // Count blank and comment lines
      lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) { metrics.blankLines++; return; }
        if (this._isCommentLine(trimmed, language)) { metrics.commentLines++; return; }
        metrics.codeLines++;
      });

      // Run all analysis modules
      this._checkSecurity(code, lines, language, issues);
      this._checkCodeSmells(code, lines, language, issues);
      this._checkComplexity(code, lines, language, issues);
      this._checkBestPractices(code, lines, language, issues);

      // Deduplicate issues by line + message
      const seen = new Set();
      const uniqueIssues = issues.filter(issue => {
        const key = `${issue.line}-${issue.message}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });

      // Calculate scores
      const scores = this._calculateScores(uniqueIssues, metrics, language);

      return { issues: uniqueIssues, scores, metrics, language };
    },

    /** Check if a line is a comment */
    _isCommentLine(trimmed, lang) {
      const singleLineComments = {
        'JavaScript': '//', 'TypeScript': '//', 'Java': '//', 'C++': '//',
        'Go': '//', 'Rust': '//', 'Swift': '//', 'Kotlin': '//',
        'PHP': '//', 'Ruby': '#', 'Python': '#', 'Shell': '#',
        'YAML': '#', 'CSS': '/*'
      };
      const marker = singleLineComments[lang];
      if (!marker) return false;
      if (marker === '/*') return trimmed.startsWith('/*') || trimmed.startsWith('*');
      return trimmed.startsWith(marker);
    },

    // ---------- Security Checks ----------
    _checkSecurity(code, lines, language, issues) {
      // Hardcoded passwords
      const passwordPatterns = [
        /password\s*[:=]\s*['"][^'"]{3,}['"]/gi,
        /passwd\s*[:=]\s*['"][^'"]{3,}['"]/gi,
        /pwd\s*[:=]\s*['"][^'"]{3,}['"]/gi,
      ];
      this._scanPatterns(lines, passwordPatterns, 'hardcodedPassword', 'security', 'high');

      // Hardcoded keys/tokens
      const keyPatterns = [
        /api[_-]?key\s*[:=]\s*['"][^'"]{8,}['"]/gi,
        /secret[_-]?key\s*[:=]\s*['"][^'"]{8,}['"]/gi,
        /access[_-]?token\s*[:=]\s*['"][^'"]{8,}['"]/gi,
        /auth[_-]?token\s*[:=]\s*['"][^'"]{8,}['"]/gi,
        /private[_-]?key\s*[:=]\s*['"][^'"]{8,}['"]/gi,
        /bearer\s+['"][^'"]{8,}['"]/gi,
      ];
      this._scanPatterns(lines, keyPatterns, 'hardcodedKey', 'security', 'critical');

      // SQL injection
      const sqlPatterns = [
        /["'].*\+\s*(req|request|params|query|body|user[_-]?input)\b/gi,
        /execute\s*\(\s*["'].*\$\{/gi,
        /query\s*\(\s*["'].*\+\s*/gi,
        /\.raw\s*\(\s*["'].*\+/gi,
        /String\.format\s*\(.*(?:SELECT|INSERT|UPDATE|DELETE)/gi,
      ];
      this._scanPatterns(lines, sqlPatterns, 'sqlInjection', 'security', 'critical');

      // XSS risks
      const xssPatterns = [
        /\.innerHTML\s*[\+]?=/gi,
        /\.outerHTML\s*[\+]?=/gi,
        /document\.write\s*\(/gi,
        /v-html\s*=/gi,
        /dangerouslySetInnerHTML/gi,
      ];
      this._scanPatterns(lines, xssPatterns, 'xssRisk', 'security', 'high');

      // Command injection
      const cmdPatterns = [
        /exec\s*\(\s*["'].*\+/gi,
        /spawn\s*\(\s*["'].*\+/gi,
        /system\s*\(\s*["'].*\+/gi,
        /os\.system\s*\(/gi,
        /os\.popen\s*\(/gi,
        /child_process/gi,
        /Runtime\.exec\s*\(/gi,
        /ProcessBuilder/gi,
      ];
      this._scanPatterns(lines, cmdPatterns, 'cmdInjection', 'security', 'critical');

      // Insecure deserialization
      const deserPatterns = [
        /pickle\.loads?\s*\(/gi,
        /yaml\.load\s*\(\s*(?!SafeLoader|FullLoader|Loader)/gi,
        /unserialize\s*\(/gi,
        /ObjectInputStream/gi,
        /readObject\s*\(\s*\)/gi,
      ];
      this._scanPatterns(lines, deserPatterns, 'insecureDeserialization', 'security', 'critical');

      // Weak crypto
      const cryptoPatterns = [
        /\bMD5\b/gi,
        /\bSHA1\b/gi,
        /\bDES\b/gi,
        /\bRC4\b/gi,
        /\bECB\b/gi,
        /Math\.random\s*\(\s*\)/gi,
      ];
      this._scanPatterns(lines, cryptoPatterns, 'weakCrypto', 'security', 'medium');

      // Sensitive info leak
      const leakPatterns = [
        /console\.(log|debug|info)\s*\(\s*(?:req|request|res|response|headers|cookies|token|password|secret)/gi,
        /print\s*\(\s*(?:password|secret|token|key|api)/gi,
        /System\.out\.print.*(?:password|secret|token|key)/gi,
      ];
      this._scanPatterns(lines, leakPatterns, 'sensitiveInfoLeak', 'security', 'medium');

      // eval usage
      const evalPatterns = [
        /\beval\s*\(/gi,
      ];
      this._scanPatterns(lines, evalPatterns, 'evalUsage', 'security', 'high');

      // Hardcoded IP
      const ipPatterns = [
        /(?:^|\s|=)(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?:\s|;|,|\)|$)/gm,
      ];
      this._scanPatterns(lines, ipPatterns, 'hardcodedIp', 'security', 'low');

      // Hardcoded port
      const portPatterns = [
        /(?:localhost|127\.0\.0\.1)\s*:\s*(\d{2,5})/g,
        /PORT\s*[:=]\s*(\d{2,5})/gi,
      ];
      this._scanPatterns(lines, portPatterns, 'hardcodedPort', 'security', 'low');

      // Path traversal
      const pathPatterns = [
        /\.\.[\/\\]/g,
        /path\.join\s*\(\s*req/gi,
        /readFile\s*\(\s*req/gi,
      ];
      this._scanPatterns(lines, pathPatterns, 'pathTraversal', 'security', 'high');

      // Insecure random
      const randomPatterns = [
        /Math\.random\s*\(\s*\)/gi,
        /rand\s*\(\s*\)/gi,
        /random\.random\s*\(\s*\)/gi,
      ];
      this._scanPatterns(lines, randomPatterns, 'insecureRandom', 'security', 'medium');

      // Open redirect
      const redirectPatterns = [
        /res\.redirect\s*\(\s*req\./gi,
        /response\.redirect\s*\(\s*request\./gi,
        /header\s*\(\s*['"]Location['"]\s*,\s*req\./gi,
      ];
      this._scanPatterns(lines, redirectPatterns, 'openRedirect', 'security', 'medium');
    },

    // ---------- Code Smell Checks ----------
    _checkCodeSmells(code, lines, language, issues) {
      // Long functions (rough detection)
      const funcRegex = this._getFunctionRegex(language);
      if (funcRegex) {
        let match;
        const funcRegexGlobal = new RegExp(funcRegex.source, 'gm');
        while ((match = funcRegexGlobal.exec(code)) !== null) {
          const funcStart = code.substring(0, match.index).split('\n').length;
          const funcBody = code.substring(match.index);
          const braceCount = this._countBraces(funcBody, language);
          const funcEnd = funcStart + braceCount.lines;
          const funcLength = funcEnd - funcStart;
          if (funcLength > 50) {
            issues.push({
              line: funcStart,
              endLine: funcEnd,
              message: I18N.t('longFunction'),
              messageKey: 'longFunction',
              category: 'codeSmell',
              severity: 'medium',
              detail: `${funcLength} ${I18N.t('linesCount')} (${language})`,
              code: lines.slice(funcStart - 1, Math.min(funcStart + 2, lines.length)).join('\n')
            });
          }
        }
      }

      // Deep nesting
      lines.forEach((line, idx) => {
        const indent = line.search(/\S/);
        if (indent >= 24) { // 6 levels of 4-space indent
          issues.push({
            line: idx + 1,
            message: I18N.t('deepNesting'),
            messageKey: 'deepNesting',
            category: 'codeSmell',
            severity: 'medium',
            detail: `Indent: ${indent} spaces`,
            code: line.trim()
          });
        }
      });

      // Magic numbers
      const magicRegex = /(?:^|[=<>+\-*/,(]\s*)(\d{2,})\b/g;
      const excludeNumbers = new Set([10, 100, 1000, 60, 24, 365, 12, 7, 30, 31, 3600, 86400, 0, 1, 2, 3, 4, 5, 6, 8, 9, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 80, 443, 8080, 3000, 5000, 8000]);
      lines.forEach((line, idx) => {
        const trimmed = line.trim();
        if (this._isCommentLine(trimmed, language)) return;
        let numMatch;
        const re = new RegExp(magicRegex.source, 'g');
        while ((numMatch = re.exec(trimmed)) !== null) {
          const num = parseInt(numMatch[1]);
          if (!excludeNumbers.has(num) && num > 1) {
            issues.push({
              line: idx + 1,
              message: I18N.t('magicNumber'),
              messageKey: 'magicNumber',
              category: 'codeSmell',
              severity: 'info',
              detail: `Number: ${num}`,
              code: trimmed
            });
            break; // One per line
          }
        }
      });

      // Large file
      if (lines.length > 500) {
        issues.push({
          line: 1,
          message: I18N.t('largeFile'),
          messageKey: 'largeFile',
          category: 'codeSmell',
          severity: 'medium',
          detail: `${lines.length} ${I18N.t('linesCount')}`,
          code: ''
        });
      }

      // Dead code detection (after return/break/continue)
      lines.forEach((line, idx) => {
        const trimmed = line.trim();
        const deadCodePatterns = [
          /^\}\s*$/, // closing brace after return
        ];
        if (idx > 0) {
          const prevLine = lines[idx - 1].trim();
          if (/^(return|break|continue|throw)\b/.test(prevLine) && !/^\}/.test(trimmed) && trimmed && !this._isCommentLine(trimmed, language)) {
            // Check if this is truly unreachable (simple heuristic)
            if (!/^(else|catch|finally|case|default)/.test(trimmed)) {
              issues.push({
                line: idx + 1,
                message: I18N.t('deadCode'),
                messageKey: 'deadCode',
                category: 'codeSmell',
                severity: 'low',
                detail: '',
                code: trimmed
              });
            }
          }
        }
      });

      // Too many parameters
      if (funcRegex) {
        let match;
        const funcRegexGlobal = new RegExp(funcRegex.source, 'gm');
        while ((match = funcRegexGlobal.exec(code)) !== null) {
          const params = match[1] || match[2] || '';
          const paramCount = params.split(',').filter(p => p.trim()).length;
          if (paramCount > 5) {
            const lineNum = code.substring(0, match.index).split('\n').length;
            issues.push({
              line: lineNum,
              message: I18N.t('tooManyParams'),
              messageKey: 'tooManyParams',
              category: 'codeSmell',
              severity: 'medium',
              detail: `${paramCount} parameters`,
              code: match[0].substring(0, 80)
            });
          }
        }
      }

      // Long lines
      lines.forEach((line, idx) => {
        if (line.length > 120) {
          issues.push({
            line: idx + 1,
            message: I18N.t('longLine'),
            messageKey: 'longLine',
            category: 'codeSmell',
            severity: 'info',
            detail: `${line.length} chars`,
            code: ''
          });
        }
      });
    },

    // ---------- Complexity Checks ----------
    _checkComplexity(code, lines, language, issues) {
      // Cyclomatic complexity (per function)
      const funcRegex = this._getFunctionRegex(language);
      if (funcRegex) {
        let match;
        const funcRegexGlobal = new RegExp(funcRegex.source, 'gm');
        while ((match = funcRegexGlobal.exec(code)) !== null) {
          const funcStart = match.index;
          const funcBody = this._extractFunctionBody(code, funcStart, language);
          if (!funcBody) continue;

          const complexity = this._calcCyclomaticComplexity(funcBody, language);
          const lineNum = code.substring(0, funcStart).split('\n').length;

          if (complexity > 10) {
            issues.push({
              line: lineNum,
              message: I18N.t('highCyclomatic'),
              messageKey: 'highCyclomatic',
              category: 'complexity',
              severity: complexity > 20 ? 'high' : 'medium',
              detail: `Complexity: ${complexity}`,
              code: match[0].substring(0, 80)
            });
          }

          const cognitive = this._calcCognitiveComplexity(funcBody, language);
          if (cognitive > 15) {
            issues.push({
              line: lineNum,
              message: I18N.t('highCognitive'),
              messageKey: 'highCognitive',
              category: 'complexity',
              severity: cognitive > 30 ? 'high' : 'medium',
              detail: `Cognitive: ${cognitive}`,
              code: match[0].substring(0, 80)
            });
          }
        }
      }
    },

    // ---------- Best Practice Checks ----------
    _checkBestPractices(code, lines, language, issues) {
      // Naming convention violations
      const namingPatterns = {
        'JavaScript': [/\b(?:var|let|const)\s+([A-Z][a-zA-Z0-9]*)\s*[=;]/g],
        'TypeScript': [/\b(?:var|let|const)\s+([A-Z][a-zA-Z0-9]*)\s*[=:]/g],
        'Python': [/\b(?:def|class)\s+([A-Z][a-z]+[A-Z])/g],
        'Java': [/\b(?:int|String|void|boolean|long|double|float)\s+([a-z][a-zA-Z0-9]*[A-Z]{2,})\b/g],
        'Go': [/\b(?:var|:=)\s+([a-z][a-zA-Z0-9]*[A-Z]{2,})\b/g],
        'Rust': [/\blet\s+mut\s+([A-Z])/g],
        'Swift': [/\b(?:var|let)\s+([a-z][a-zA-Z0-9]*[A-Z]{2,})\b/g],
        'Kotlin': [/\b(?:var|val)\s+([a-z][a-zA-Z0-9]*[A-Z]{2,})\b/g],
      };
      const patterns = namingPatterns[language] || [];
      patterns.forEach(pattern => {
        let match;
        const re = new RegExp(pattern.source, 'gm');
        while ((match = re.exec(code)) !== null) {
          const lineNum = code.substring(0, match.index).split('\n').length;
          issues.push({
            line: lineNum,
            message: I18N.t('namingConvention'),
            messageKey: 'namingConvention',
            category: 'bestPractice',
            severity: 'info',
            detail: match[1],
            code: lines[lineNum - 1].trim()
          });
        }
      });

      // Missing comments (files with no comments)
      const commentCount = lines.filter(l => this._isCommentLine(l.trim(), language)).length;
      if (commentCount === 0 && lines.length > 10) {
        issues.push({
          line: 1,
          message: I18N.t('noComments'),
          messageKey: 'noComments',
          category: 'bestPractice',
          severity: 'info',
          detail: '',
          code: ''
        });
      }

      // Missing error handling
      const errorHandlingPatterns = [
        { lang: 'JavaScript', pattern: /\bfetch\s*\(/g, handler: /\.catch\s*\(|try\s*\{/g },
        { lang: 'TypeScript', pattern: /\bfetch\s*\(/g, handler: /\.catch\s*\(|try\s*\{/g },
        { lang: 'Python', pattern: /\brequests?\.\w+\s*\(/g, handler: /except\s+/g },
        { lang: 'Go', pattern: /\b\w+\.\w+\s*\(\)/g, handler: /if\s+err\s*!=\s*nil/g },
        { lang: 'Java', pattern: /new\s+URL\s*\(/g, handler: /catch\s*\(/g },
        { lang: 'Rust', pattern: /\bunwrap\s*\(\s*\)/g, handler: null },
        { lang: 'Swift', pattern: /try!\s*/g, handler: null },
      ];
      const ep = errorHandlingPatterns.find(e => e.lang === language);
      if (ep) {
        let match;
        const re = new RegExp(ep.pattern.source, 'g');
        let count = 0;
        while ((match = re.exec(code)) !== null) count++;
        if (ep.handler) {
          let hMatch;
          const hRe = new RegExp(ep.handler.source, 'g');
          let hCount = 0;
          while ((hMatch = hRe.exec(code)) !== null) hCount++;
          if (count > hCount && count > 2) {
            issues.push({
              line: 1,
              message: I18N.t('noErrorHandling'),
              messageKey: 'noErrorHandling',
              category: 'bestPractice',
              severity: 'medium',
              detail: '',
              code: ''
            });
          }
        } else if (count > 0) {
          // Patterns like unwrap/try! are inherently risky
          let uMatch;
          const uRe = new RegExp(ep.pattern.source, 'g');
          while ((uMatch = uRe.exec(code)) !== null) {
            const lineNum = code.substring(0, uMatch.index).split('\n').length;
            issues.push({
              line: lineNum,
              message: I18N.t('noErrorHandling'),
              messageKey: 'noErrorHandling',
              category: 'bestPractice',
              severity: 'medium',
              detail: '',
              code: lines[lineNum - 1].trim()
            });
          }
        }
      }

      // TODO/FIXME markers
      const todoPatterns = [/TODO/gi, /FIXME/gi, /HACK/gi, /XXX/gi];
      todoPatterns.forEach(pattern => {
        let match;
        const re = new RegExp(pattern.source, 'g');
        while ((match = re.exec(code)) !== null) {
          const lineNum = code.substring(0, match.index).split('\n').length;
          issues.push({
            line: lineNum,
            message: I18N.t('todoFixme'),
            messageKey: 'todoFixme',
            category: 'bestPractice',
            severity: 'info',
            detail: match[0],
            code: lines[lineNum - 1].trim()
          });
        }
      });

      // Console.log in JS/TS
      if (language === 'JavaScript' || language === 'TypeScript') {
        const consolePatterns = [/console\.(log|debug|info|warn|error)\s*\(/g];
        this._scanPatterns(lines, consolePatterns, 'consoleLog', 'bestPractice', 'info');
      }

      // var usage in JS
      if (language === 'JavaScript' || language === 'TypeScript') {
        const varPatterns = [/\bvar\s+\w+/g];
        this._scanPatterns(lines, varPatterns, 'varUsage', 'bestPractice', 'info');
      }

      // any type in TypeScript
      if (language === 'TypeScript') {
        const anyPatterns = [/\bany\b/g];
        this._scanPatterns(lines, anyPatterns, 'anyType', 'bestPractice', 'low');
      }

      // No strict mode
      if (language === 'JavaScript') {
        if (!code.includes("'use strict'") && !code.includes('"use strict"')) {
          issues.push({
            line: 1,
            message: I18N.t('noStrict'),
            messageKey: 'noStrict',
            category: 'bestPractice',
            severity: 'info',
            detail: '',
            code: ''
          });
        }
      }
    },

    // ---------- Helper Methods ----------

    /** Scan lines with regex patterns and push issues */
    _scanPatterns(lines, patterns, messageKey, category, severity) {
      patterns.forEach(pattern => {
        lines.forEach((line, idx) => {
          const re = new RegExp(pattern.source, pattern.flags || 'gi');
          if (re.test(line)) {
            issues.push({
              line: idx + 1,
              message: I18N.t(messageKey),
              messageKey: messageKey,
              category: category,
              severity: severity,
              detail: '',
              code: line.trim()
            });
          }
        });
      });
    },

    /** Get function regex for language */
    _getFunctionRegex(language) {
      const patterns = {
        'JavaScript': /(?:function\s+(\w+)\s*\(([^)]*)\)|(?:const|let|var)\s+(\w+)\s*=\s*(?:async\s+)?\([^)]*\)\s*=>|(?:const|let|var)\s+(\w+)\s*=\s*(?:async\s+)?function\s*\([^)]*\))/,
        'TypeScript': /(?:function\s+(\w+)\s*(?:<[^>]*>)?\s*\(([^)]*)\)|(?:const|let|var)\s+(\w+)\s*(?::\s*[^=]+)?\s*=\s*(?:async\s+)?\([^)]*\)\s*(?::\s*[^=]+)?\s*=>|(?:const|let|var)\s+(\w+)\s*=\s*(?:async\s+)?function\s*\([^)]*\))/,
        'Python': /(?:def\s+(\w+)\s*\(([^)]*)\))/,
        'Go': /func\s+(?:\([^)]*\)\s+)?(\w+)\s*\(([^)]*)\)/,
        'Rust': /fn\s+(\w+)\s*(?:<[^>]*>)?\s*\(([^)]*)\)/,
        'Java': /(?:public|private|protected|static|\s)+\w+\s+(\w+)\s*\(([^)]*)\)/,
        'C++': /(?:\w+\s+)+(\w+)\s*\(([^)]*)\)\s*\{?/,
        'PHP': /function\s+(\w+)\s*\(([^)]*)\)/,
        'Ruby': /def\s+(\w+)\s*(?:\(([^)]*)\))?/,
        'Swift': /func\s+(\w+)\s*\(([^)]*)\)/,
        'Kotlin': /fun\s+(\w+)\s*\(([^)]*)\)/,
      };
      return patterns[language] || null;
    },

    /** Count braces to find function end */
    _countBraces(code, language) {
      let depth = 0;
      let lines = 0;
      let started = false;
      const braceLangs = ['JavaScript', 'TypeScript', 'Java', 'C++', 'Go', 'Rust', 'PHP', 'Swift', 'Kotlin'];
      if (!braceLangs.includes(language)) return { lines: 10, depth: 0 };

      for (let i = 0; i < code.length; i++) {
        if (code[i] === '{') { depth++; started = true; }
        else if (code[i] === '}') { depth--; if (started && depth === 0) break; }
        else if (code[i] === '\n') lines++;
      }
      return { lines: Math.max(lines, 1), depth };
    },

    /** Extract function body */
    _extractFunctionBody(code, startIndex, language) {
      const braceLangs = ['JavaScript', 'TypeScript', 'Java', 'C++', 'Go', 'Rust', 'PHP', 'Swift', 'Kotlin'];
      if (!braceLangs.includes(language)) {
        // For Python/Ruby, find next def or end of file
        const afterDef = code.substring(startIndex);
        const nextDef = afterDef.search(/(?:^|\n)\s*(?:def|class|module)\s/);
        return nextDef > 0 ? afterDef.substring(0, nextDef) : afterDef;
      }

      let depth = 0;
      let startFound = false;
      for (let i = startIndex; i < code.length; i++) {
        if (code[i] === '{') { depth++; startFound = true; }
        else if (code[i] === '}') {
          depth--;
          if (startFound && depth === 0) {
            return code.substring(startIndex, i + 1);
          }
        }
      }
      return code.substring(startIndex, Math.min(startIndex + 500, code.length));
    },

    /** Calculate cyclomatic complexity */
    _calcCyclomaticComplexity(code, language) {
      let complexity = 1;
      const decisionPatterns = [
        /\bif\b/g, /\belse\s+if\b/g, /\bfor\b/g, /\bwhile\b/g,
        /\bcase\b/g, /\bcatch\b/g, /\&\&/g, /\|\|/g,
        /\?\?/g, /\?[^:.]/g,
      ];
      if (language === 'Python') {
        decisionPatterns.push(/\belif\b/g, /\bexcept\b/g, /\band\b/g, /\bor\b/g);
      }
      if (language === 'Go') {
        decisionPatterns.push(/\bselect\b/g);
      }
      if (language === 'Rust') {
        decisionPatterns.push(/\bmatch\b/g);
      }
      decisionPatterns.forEach(p => {
        let m;
        const re = new RegExp(p.source, 'g');
        while ((m = re.exec(code)) !== null) complexity++;
      });
      return complexity;
    },

    /** Calculate cognitive complexity */
    _calcCognitiveComplexity(code, language) {
      let complexity = 0;
      let nesting = 0;
      const lines = code.split('\n');

      lines.forEach(line => {
        const trimmed = line.trim();
        // Nesting increases
        if (/\b(if|else|for|while|elif|except|catch|match|select)\b/.test(trimmed)) {
          nesting++;
          complexity += nesting;
        }
        // Nesting decreases
        if (/^\}/.test(trimmed) || (language === 'Python' && /^(else|elif|except|finally)/.test(trimmed))) {
          nesting = Math.max(0, nesting - 1);
        }
        // Logical operators
        const andOr = (trimmed.match(/\&\&|\|\||\band\b|\bor\b/g) || []).length;
        complexity += andOr;
        // Ternary
        if (/\?[^:.]/.test(trimmed)) complexity++;
      });

      return complexity;
    },

    /** Calculate scores from issues */
    _calculateScores(issues, metrics, language) {
      const securityIssues = issues.filter(i => i.category === 'security');
      const smellIssues = issues.filter(i => i.category === 'codeSmell');
      const complexityIssues = issues.filter(i => i.category === 'complexity');
      const practiceIssues = issues.filter(i => i.category === 'bestPractice');

      const severityWeights = { critical: 15, high: 10, medium: 5, low: 2, info: 1 };

      const calcScore = (issueList) => {
        let penalty = 0;
        issueList.forEach(i => { penalty += severityWeights[i.severity] || 1; });
        return Math.max(0, Math.min(100, 100 - penalty));
      };

      const securityScore = calcScore(securityIssues);
      const qualityScore = calcScore(smellIssues);
      const complexityScore = calcScore(complexityIssues);
      const practiceScore = calcScore(practiceIssues);
      const overallScore = Math.round(
        securityScore * 0.35 +
        qualityScore * 0.25 +
        complexityScore * 0.2 +
        practiceScore * 0.2
      );

      return {
        overall: overallScore,
        security: securityScore,
        quality: qualityScore,
        complexity: complexityScore,
        bestPractice: practiceScore
      };
    }
  };

  // ==================== Chart Renderers ====================
  const ChartRenderer = {
    /** Draw the overall score ring chart */
    drawScoreRing(canvas, score) {
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const size = 220;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = size + 'px';
      canvas.style.height = size + 'px';
      ctx.scale(dpr, dpr);

      const cx = size / 2;
      const cy = size / 2;
      const radius = 85;
      const lineWidth = 14;

      // Background ring
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim() || 'rgba(99,102,241,0.15)';
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Score arc
      const startAngle = -Math.PI / 2;
      const endAngle = startAngle + (Math.PI * 2 * score / 100);
      const gradient = ctx.createLinearGradient(0, 0, size, size);

      if (score >= 80) {
        gradient.addColorStop(0, '#059669');
        gradient.addColorStop(1, '#34d399');
      } else if (score >= 60) {
        gradient.addColorStop(0, '#6366f1');
        gradient.addColorStop(1, '#818cf8');
      } else if (score >= 40) {
        gradient.addColorStop(0, '#d97706');
        gradient.addColorStop(1, '#fbbf24');
      } else {
        gradient.addColorStop(0, '#dc2626');
        gradient.addColorStop(1, '#f87171');
      }

      ctx.beginPath();
      ctx.arc(cx, cy, radius, startAngle, endAngle);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Score text
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim() || '#1e1b4b';
      ctx.font = 'bold 48px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(score.toString(), cx, cy - 6);

      // Label
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-muted').trim() || '#9ca3af';
      ctx.font = '13px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText('/ 100', cx, cy + 24);
    },

    /** Draw radar chart for dimensions */
    drawRadar(canvas, scores) {
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const size = 280;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = size + 'px';
      canvas.style.height = size + 'px';
      ctx.scale(dpr, dpr);

      const cx = size / 2;
      const cy = size / 2;
      const maxRadius = 100;
      const labels = [
        I18N.t('securityScore'),
        I18N.t('qualityScore'),
        I18N.t('complexityScore'),
        I18N.t('bestPracticeScore')
      ];
      const values = [scores.security, scores.quality, scores.complexity, scores.bestPractice];
      const count = labels.length;
      const angleStep = (Math.PI * 2) / count;

      // Get theme colors
      const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim() || '#1e1b4b';
      const mutedColor = getComputedStyle(document.documentElement).getPropertyValue('--text-muted').trim() || '#9ca3af';
      const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim() || 'rgba(99,102,241,0.15)';

      // Draw grid rings
      for (let ring = 1; ring <= 5; ring++) {
        const r = (maxRadius / 5) * ring;
        ctx.beginPath();
        for (let i = 0; i <= count; i++) {
          const angle = -Math.PI / 2 + angleStep * i;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw axis lines
      for (let i = 0; i < count; i++) {
        const angle = -Math.PI / 2 + angleStep * i;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + maxRadius * Math.cos(angle), cy + maxRadius * Math.sin(angle));
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw data polygon
      ctx.beginPath();
      for (let i = 0; i <= count; i++) {
        const idx = i % count;
        const angle = -Math.PI / 2 + angleStep * idx;
        const r = (values[idx] / 100) * maxRadius;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.fillStyle = 'rgba(99, 102, 241, 0.15)';
      ctx.fill();
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw data points
      for (let i = 0; i < count; i++) {
        const angle = -Math.PI / 2 + angleStep * i;
        const r = (values[i] / 100) * maxRadius;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#6366f1';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw labels
      for (let i = 0; i < count; i++) {
        const angle = -Math.PI / 2 + angleStep * i;
        const labelR = maxRadius + 24;
        const x = cx + labelR * Math.cos(angle);
        const y = cy + labelR * Math.sin(angle);
        ctx.fillStyle = textColor;
        ctx.font = '12px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(labels[i], x, y);

        // Score value
        ctx.fillStyle = mutedColor;
        ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillText(values[i].toString(), x, y + 16);
      }
    },

    /** Draw pie chart for issue distribution */
    drawPie(canvas, issues) {
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const size = 260;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = size + 'px';
      canvas.style.height = size + 'px';
      ctx.scale(dpr, dpr);

      const categories = {};
      issues.forEach(i => {
        categories[i.category] = (categories[i.category] || 0) + 1;
      });

      const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim() || '#1e1b4b';
      const mutedColor = getComputedStyle(document.documentElement).getPropertyValue('--text-muted').trim() || '#9ca3af';

      if (Object.keys(categories).length === 0) {
        ctx.fillStyle = mutedColor;
        ctx.font = '14px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(I18N.t('noIssues'), size / 2, size / 2);
        return;
      }

      const total = issues.length;
      const cx = size / 2 - 30;
      const cy = size / 2;
      const radius = 90;
      const innerRadius = 55;

      const colors = {
        security: '#dc2626',
        codeSmell: '#d97706',
        complexity: '#6366f1',
        bestPractice: '#059669'
      };

      const categoryLabels = {
        security: I18N.t('security'),
        codeSmell: I18N.t('codeSmell'),
        complexity: I18N.t('complexity'),
        bestPractice: I18N.t('bestPractice')
      };

      let startAngle = -Math.PI / 2;
      const entries = Object.entries(categories);

      entries.forEach(([cat, count]) => {
        const sliceAngle = (count / total) * Math.PI * 2;
        const endAngle = startAngle + sliceAngle;

        ctx.beginPath();
        ctx.arc(cx, cy, radius, startAngle, endAngle);
        ctx.arc(cx, cy, innerRadius, endAngle, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = colors[cat] || '#6366f1';
        ctx.fill();

        startAngle = endAngle;
      });

      // Center text
      ctx.fillStyle = textColor;
      ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(total.toString(), cx, cy - 6);
      ctx.fillStyle = mutedColor;
      ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText(I18N.t('issuesFound').replace(/个?问题?/, '').trim() || 'issues', cx, cy + 14);

      // Legend
      const legendX = size / 2 + 40;
      let legendY = cy - (entries.length * 14);
      entries.forEach(([cat, count]) => {
        ctx.fillStyle = colors[cat] || '#6366f1';
        ctx.beginPath();
        ctx.arc(legendX, legendY + 6, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = textColor;
        ctx.font = '12px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${categoryLabels[cat] || cat} (${count})`, legendX + 14, legendY + 6);

        legendY += 28;
      });
    }
  };

  // ==================== UI Controller ====================
  const UI = {
    elements: {},
    analysisResult: null,
    currentFilter: 'all',
    searchQuery: '',

    /** Initialize UI */
    init() {
      this._cacheElements();
      this._bindEvents();
      this._loadPreferences();
      this._updateUIText();
    },

    /** Cache DOM elements */
    _cacheElements() {
      this.elements = {
        body: document.body,
        html: document.documentElement,
        codeEditor: document.getElementById('codeEditor'),
        charCount: document.getElementById('charCount'),
        lineCount: document.getElementById('lineCount'),
        langBadge: document.getElementById('langBadge'),
        analyzeBtn: document.getElementById('analyzeBtn'),
        clearBtn: document.getElementById('clearBtn'),
        exportBtn: document.getElementById('exportBtn'),
        themeBtn: document.getElementById('themeBtn'),
        langBtn: document.getElementById('langBtn'),
        langMenu: document.getElementById('langMenu'),
        resultsSection: document.getElementById('resultsSection'),
        overallScore: document.getElementById('overallScore'),
        securityScore: document.getElementById('securityScore'),
        qualityScore: document.getElementById('qualityScore'),
        complexityScore: document.getElementById('complexityScore'),
        bestPracticeScore: document.getElementById('bestPracticeScore'),
        scoreRingCanvas: document.getElementById('scoreRingCanvas'),
        radarCanvas: document.getElementById('radarCanvas'),
        pieCanvas: document.getElementById('pieCanvas'),
        issuesList: document.getElementById('issuesList'),
        issuesCount: document.getElementById('issuesCount'),
        issuesSearch: document.getElementById('issuesSearch'),
        loadingOverlay: document.getElementById('loadingOverlay'),
        fileInput: document.getElementById('fileInput'),
        bestPracticeBar: document.getElementById('bestPracticeBar'),
        bestPracticeDetails: document.getElementById('bestPracticeDetails'),
      };
    },

    /** Bind event listeners */
    _bindEvents() {
      // Code editor input
      this.elements.codeEditor.addEventListener('input', () => this._onCodeInput());
      this.elements.codeEditor.addEventListener('dragover', (e) => this._onDragOver(e));
      this.elements.codeEditor.addEventListener('dragleave', (e) => this._onDragLeave(e));
      this.elements.codeEditor.addEventListener('drop', (e) => this._onDrop(e));

      // Also handle drag on the wrapper
      const wrapper = this.elements.codeEditor.closest('.code-editor-wrapper');
      if (wrapper) {
        wrapper.addEventListener('dragover', (e) => this._onDragOver(e));
        wrapper.addEventListener('dragleave', (e) => this._onDragLeave(e));
        wrapper.addEventListener('drop', (e) => this._onDrop(e));
      }

      // Buttons
      this.elements.analyzeBtn.addEventListener('click', () => this._analyze());
      this.elements.clearBtn.addEventListener('click', () => this._clear());
      this.elements.exportBtn.addEventListener('click', () => this._exportReport());
      this.elements.themeBtn.addEventListener('click', () => this._toggleTheme());

      // Language menu
      this.elements.langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.elements.langMenu.classList.toggle('open');
      });
      document.addEventListener('click', () => {
        this.elements.langMenu.classList.remove('open');
      });

      // Language options
      this.elements.langMenu.querySelectorAll('.lang-menu-item').forEach(item => {
        item.addEventListener('click', () => {
          const lang = item.dataset.lang;
          I18N.setLang(lang);
          this._savePreferences();
          this._updateUIText();
          this.elements.langMenu.classList.remove('open');
          // Re-render if results exist
          if (this.analysisResult) {
            this._renderResults(this.analysisResult);
          }
        });
      });

      // Issues search
      this.elements.issuesSearch.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase();
        this._renderIssues();
      });

      // Filter chips
      document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.currentFilter = chip.dataset.filter;
          this._renderIssues();
        });
      });

      // File input
      this.elements.fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
          this._readFile(e.target.files[0]);
        }
      });

      // Upload button triggers file input
      const uploadBtn = document.getElementById('uploadBtn');
      if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
          this.elements.fileInput.click();
        });
      }

      // Issue item expand/collapse
      this.elements.issuesList.addEventListener('click', (e) => {
        const item = e.target.closest('.issue-item');
        if (item) {
          item.classList.toggle('expanded');
        }
      });

      // Keyboard shortcut: Ctrl+Enter to analyze
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
          e.preventDefault();
          this._analyze();
        }
      });
    },

    /** Handle code input */
    _onCodeInput() {
      const code = this.elements.codeEditor.value;
      this.elements.charCount.textContent = code.length;
      this.elements.lineCount.textContent = code.split('\n').length;

      // Detect language
      const lang = LanguageDetector.detect(code);
      this.elements.langBadge.textContent = lang;
      this.elements.langBadge.classList.toggle('unknown', lang === 'Unknown');
    },

    /** Handle drag over */
    _onDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
      const wrapper = this.elements.codeEditor.closest('.code-editor-wrapper');
      if (wrapper) wrapper.classList.add('drag-over');
    },

    /** Handle drag leave */
    _onDragLeave(e) {
      e.preventDefault();
      e.stopPropagation();
      const wrapper = this.elements.codeEditor.closest('.code-editor-wrapper');
      if (wrapper) wrapper.classList.remove('drag-over');
    },

    /** Handle file drop */
    _onDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      const wrapper = this.elements.codeEditor.closest('.code-editor-wrapper');
      if (wrapper) wrapper.classList.remove('drag-over');

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        this._readFile(files[0]);
      }
    },

    /** Read file content */
    _readFile(file) {
      // Check file size (max 1MB)
      if (file.size > 1024 * 1024) {
        alert('File too large. Maximum size is 1MB.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        this.elements.codeEditor.value = e.target.result;
        this._onCodeInput();
      };
      reader.onerror = () => {
        alert('Failed to read file.');
      };
      reader.readAsText(file);
    },

    /** Run analysis */
    _analyze() {
      const code = this.elements.codeEditor.value.trim();
      if (!code) {
        alert(I18N.t('noCode'));
        return;
      }

      // Show loading
      this.elements.loadingOverlay.classList.add('visible');

      // Use setTimeout to allow UI to update
      setTimeout(() => {
        try {
          const language = LanguageDetector.detect(code);
          const result = AnalysisEngine.analyze(code, language);
          this.analysisResult = result;
          this._renderResults(result);
        } catch (err) {
          console.error('Analysis error:', err);
        } finally {
          this.elements.loadingOverlay.classList.remove('visible');
        }
      }, 100);
    },

    /** Clear editor and results */
    _clear() {
      this.elements.codeEditor.value = '';
      this.elements.resultsSection.classList.remove('visible');
      this.analysisResult = null;
      this.elements.charCount.textContent = '0';
      this.elements.lineCount.textContent = '0';
      this.elements.langBadge.textContent = 'Unknown';
      this.elements.langBadge.classList.add('unknown');
      this.elements.fileInput.value = '';
    },

    /** Render analysis results */
    _renderResults(result) {
      // Show results section
      this.elements.resultsSection.classList.add('visible');

      // Update summary cards
      this._updateScoreCard(this.elements.overallScore, result.scores.overall);
      this._updateScoreCard(this.elements.securityScore, result.scores.security);
      this._updateScoreCard(this.elements.qualityScore, result.scores.quality);
      this._updateScoreCard(this.elements.complexityScore, result.scores.complexity);
      this.elements.bestPracticeScore.textContent = result.scores.bestPractice;

      // Update best practice bar and details
      if (this.elements.bestPracticeBar) {
        this.elements.bestPracticeBar.style.width = result.scores.bestPractice + '%';
      }
      if (this.elements.bestPracticeDetails) {
        const bpIssues = result.issues.filter(i => i.category === 'bestPractice');
        if (bpIssues.length === 0) {
          this.elements.bestPracticeDetails.innerHTML = `<div style="color:var(--text-muted);font-size:13px;text-align:center;padding:12px">${I18N.t('noIssuesDesc')}</div>`;
        } else {
          this.elements.bestPracticeDetails.innerHTML = bpIssues.slice(0, 5).map(issue => `
            <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--text-tertiary)">
              <div class="issue-severity ${issue.severity}" style="flex-shrink:0"></div>
              <span style="flex:1">${this._escapeHtml(issue.message)}</span>
              <span style="color:var(--text-muted);font-size:11px">${I18N.t('line')}: ${issue.line}</span>
            </div>
          `).join('');
        }
      }

      // Draw charts
      ChartRenderer.drawScoreRing(this.elements.scoreRingCanvas, result.scores.overall);
      ChartRenderer.drawRadar(this.elements.radarCanvas, result.scores);
      ChartRenderer.drawPie(this.elements.pieCanvas, result.issues);

      // Update issues count
      this.elements.issuesCount.textContent = `${result.issues.length} ${I18N.t('issuesFound')}`;

      // Render issues list
      this._renderIssues();

      // Scroll to results
      this.elements.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },

    /** Update a score card with class */
    _updateScoreCard(el, score) {
      el.textContent = score;
      el.className = 'summary-card-value';
      if (score >= 80) el.classList.add('score-excellent');
      else if (score >= 60) el.classList.add('score-good');
      else if (score >= 40) el.classList.add('score-warning');
      else el.classList.add('score-poor');
    },

    /** Render issues list with current filter and search */
    _renderIssues() {
      if (!this.analysisResult) return;

      let issues = this.analysisResult.issues;

      // Apply filter
      if (this.currentFilter !== 'all') {
        issues = issues.filter(i => i.severity === this.currentFilter);
      }

      // Apply search
      if (this.searchQuery) {
        issues = issues.filter(i =>
          i.message.toLowerCase().includes(this.searchQuery) ||
          i.category.toLowerCase().includes(this.searchQuery) ||
          (i.detail && i.detail.toLowerCase().includes(this.searchQuery)) ||
          (i.code && i.code.toLowerCase().includes(this.searchQuery))
        );
      }

      // Sort by severity
      const severityOrder = { critical: 0, high: 1, medium: 2, low: 3, info: 4 };
      issues.sort((a, b) => (severityOrder[a.severity] || 5) - (severityOrder[b.severity] || 5));

      const list = this.elements.issuesList;

      if (issues.length === 0) {
        list.innerHTML = `
          <div class="no-issues">
            <div class="no-issues-icon">&#10003;</div>
            <div class="no-issues-text">${I18N.t('noIssues')}</div>
          </div>
        `;
        return;
      }

      list.innerHTML = issues.map(issue => `
        <div class="issue-item" data-line="${issue.line}">
          <div class="issue-severity ${issue.severity}"></div>
          <div class="issue-content">
            <div class="issue-message">${this._escapeHtml(issue.message)}</div>
            <div class="issue-meta">
              <span class="issue-badge ${issue.severity}">${issue.severity}</span>
              <span class="issue-meta-item">${I18N.t('line')}: ${issue.line}</span>
              <span class="issue-meta-item">${I18N.t('category')}: ${I18N.t(issue.category)}</span>
              ${issue.detail ? `<span class="issue-meta-item">${this._escapeHtml(issue.detail)}</span>` : ''}
            </div>
            ${issue.code ? `<div class="issue-code-preview">${this._escapeHtml(issue.code)}</div>` : ''}
          </div>
        </div>
      `).join('');
    },

    /** Toggle dark/light theme */
    _toggleTheme() {
      const current = this.elements.html.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      this.elements.html.setAttribute('data-theme', next);
      this._savePreferences();
      this._updateThemeButton(next);

      // Re-render charts if results exist
      if (this.analysisResult) {
        setTimeout(() => {
          ChartRenderer.drawScoreRing(this.elements.scoreRingCanvas, this.analysisResult.scores.overall);
          ChartRenderer.drawRadar(this.elements.radarCanvas, this.analysisResult.scores);
          ChartRenderer.drawPie(this.elements.pieCanvas, this.analysisResult.issues);
        }, 50);
      }
    },

    /** Update theme button icon */
    _updateThemeButton(theme) {
      const btn = this.elements.themeBtn;
      if (theme === 'dark') {
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
        btn.setAttribute('data-tooltip', I18N.t('lightMode'));
      } else {
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
        btn.setAttribute('data-tooltip', I18N.t('darkMode'));
      }
    },

    /** Export report as JSON */
    _exportReport() {
      if (!this.analysisResult) {
        alert(I18N.t('noCode'));
        return;
      }

      const report = {
        meta: {
          tool: 'CodeLens-AI',
          version: '1.0.0',
          timestamp: new Date().toISOString(),
          language: this.analysisResult.language,
        },
        metrics: this.analysisResult.metrics,
        scores: this.analysisResult.scores,
        issues: this.analysisResult.issues.map(i => ({
          line: i.line,
          severity: i.severity,
          category: i.category,
          message: i.message,
          detail: i.detail || undefined,
          code: i.code || undefined,
        })),
      };

      const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `codelens-report-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    },

    /** Update all UI text from i18n */
    _updateUIText() {
      // Header
      document.getElementById('logoText').textContent = I18N.t('appName');
      document.getElementById('taglineText').textContent = I18N.t('tagline');

      // Buttons
      this._updateThemeButton(this.elements.html.getAttribute('data-theme') || 'light');
      this.elements.langBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg><span class="btn-text">${I18N.t('language')}</span>`;

      // Language menu items
      this.elements.langMenu.querySelectorAll('.lang-menu-item').forEach(item => {
        item.classList.toggle('active', item.dataset.lang === I18N.current);
      });

      // Input section
      document.getElementById('inputTitle').textContent = I18N.t('pasteCode');
      document.getElementById('uploadBtn').innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg><span class="btn-text">${I18N.t('uploadFile')}</span>`;
      this.elements.analyzeBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg><span class="btn-text">${I18N.t('analyze')}</span>`;
      this.elements.clearBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg><span class="btn-text">${I18N.t('clear')}</span>`;
      this.elements.exportBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg><span class="btn-text">${I18N.t('exportReport')}</span>`;

      // Code editor placeholder
      this.elements.codeEditor.placeholder = I18N.t('enterCode');

      // Chart titles
      document.getElementById('scoreChartTitle').textContent = I18N.t('scoreChart');
      document.getElementById('radarChartTitle').textContent = I18N.t('radarChart');
      document.getElementById('pieChartTitle').textContent = I18N.t('pieChart');

      // Summary labels
      document.getElementById('overallLabel').textContent = I18N.t('overallScore');
      document.getElementById('securityLabel').textContent = I18N.t('securityScore');
      document.getElementById('qualityLabel').textContent = I18N.t('qualityScore');
      document.getElementById('complexityLabel').textContent = I18N.t('complexityScore');
      document.getElementById('bestPracticeLabel').textContent = I18N.t('bestPracticeScore');
      document.getElementById('bestPracticeChartTitle').textContent = I18N.t('bestPracticeScore');

      // Issues section
      document.getElementById('issuesTitle').textContent = I18N.t('issuesList');
      this.elements.issuesSearch.placeholder = I18N.t('searchIssues');

      // Filter chips
      document.querySelectorAll('.filter-chip').forEach(chip => {
        const filter = chip.dataset.filter;
        const key = 'filter' + filter.charAt(0).toUpperCase() + filter.slice(1);
        chip.textContent = I18N.t(key);
      });
    },

    /** Save preferences to localStorage */
    _savePreferences() {
      try {
        localStorage.setItem('codelens-theme', this.elements.html.getAttribute('data-theme') || 'light');
        localStorage.setItem('codelens-lang', I18N.current);
      } catch (e) { /* localStorage not available */ }
    },

    /** Load preferences from localStorage */
    _loadPreferences() {
      try {
        const theme = localStorage.getItem('codelens-theme') || 'light';
        const lang = localStorage.getItem('codelens-lang') || 'zh-CN';

        this.elements.html.setAttribute('data-theme', theme);
        I18N.setLang(lang);
        this._updateThemeButton(theme);
      } catch (e) { /* localStorage not available */ }
    },

    /** Escape HTML to prevent XSS */
    _escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }
  };

  // ==================== Initialize on DOM Ready ====================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UI.init());
  } else {
    UI.init();
  }

})();
