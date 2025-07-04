const fs = require('fs');
const path = require('path');

// Generate more detailed page descriptions
hexo.extend.helper.register('enhanced_page_description', function () {
  let description = '';

  if (this.is_home()) {
    description = `${this.config.description} - Quick reference guides for developers, programmers, and system administrators. Find cheat sheets for popular programming languages, tools, and technologies.`;
  } else if (this.page && this.page.intro && this.page.intro.trim()) {
    description = this.strip_html(this.markdown(this.page.intro)).substring(0, 155);
  } else if (this.is_post()) {
    const categoryNames = [];
    if (this.page.categories && this.page.categories.each) {
      this.page.categories.each(function (cat) {
        categoryNames.push(cat.name);
      });
    }

    const categoryText = categoryNames.length > 0 ? `${categoryNames[0]} ` : '';
    description = `${this.page.title} cheat sheet and quick reference guide. Essential ${categoryText}shortcuts, commands, and tips for developers and system administrators.`;
  } else if (this.page && this.page.content) {
    description = this.strip_html(this.page.content).substring(0, 155);
  } else {
    description = this.config.description || '';
  }

  // Clean up description text
  description = description.replace(/[\r\n\s\s+]+/g, ' ').trim();

  // Ensure description ends with a period
  if (
    description &&
    !description.endsWith('.') &&
    !description.endsWith('!') &&
    !description.endsWith('?')
  ) {
    description += '.';
  }

  return description;
});

// Generate article reading time estimate
hexo.extend.helper.register('reading_time', function (content) {
  if (!content) return '2 min read';

  const wordsPerMinute = 200;
  const textContent = this.strip_html(content);
  const wordCount = textContent.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return `${readingTime} min read`;
});

// Generate related keywords
hexo.extend.helper.register('related_keywords', function () {
  let keywords = [];

  if (this.is_post()) {
    // Basic keywords
    keywords.push('cheat sheet', 'quick reference', 'guide', 'tutorial');

    // Add page title keywords
    if (this.page.title) {
      keywords.push(this.page.title.toLowerCase());
      keywords.push(`${this.page.title.toLowerCase()} guide`);
      keywords.push(`${this.page.title.toLowerCase()} commands`);
    }

    // Add category keywords
    if (this.page.categories && this.page.categories.each) {
      this.page.categories.each(function (cat) {
        keywords.push(cat.name.toLowerCase());
      });
    }

    // Add tag keywords
    if (this.page.tags && this.page.tags.each) {
      this.page.tags.each(function (tag) {
        keywords.push(tag.name.toLowerCase());
      });
    }
  }

  return [...new Set(keywords)].join(', ');
});

// Generate page type
hexo.extend.helper.register('page_type', function () {
  if (this.is_home()) return 'homepage';
  if (this.is_post()) return 'cheatsheet';
  if (this.is_page()) return 'page';
  return 'other';
});

// Generate estimated word count
hexo.extend.helper.register('word_count', function (content) {
  if (!content) return 0;
  const textContent = this.strip_html(content);
  return textContent.split(/\s+/).length;
});

// Check if there is a table of contents
hexo.extend.helper.register('has_toc', function (content) {
  if (!content) return false;

  // Check if there are title elements
  const headingRegex = /<h[1-6][^>]*>/gi;
  const headings = content.match(headingRegex);

  return headings && headings.length >= 3;
});

// Generate breadcrumb data
hexo.extend.helper.register('breadcrumb_data', function () {
  const breadcrumbs = [];

  // Homepage link
  breadcrumbs.push({
    name: 'Home',
    url: this.config.url,
    position: 1
  });

  if (this.is_post()) {
    // Category link
    if (this.page.categories && this.page.categories.length > 0) {
      const mainCategory = this.page.categories.toArray()[0];
      breadcrumbs.push({
        name: mainCategory.name,
        url: `${this.config.url}/#${mainCategory.name.toLowerCase().replace(/\s+/g, '-')}`,
        position: 2
      });

      // Current page
      breadcrumbs.push({
        name: `${this.page.title} Cheat Sheet`,
        url: this.clean_url(this.url),
        position: 3
      });
    } else {
      // Current page
      breadcrumbs.push({
        name: `${this.page.title} Cheat Sheet`,
        url: this.clean_url(this.url),
        position: 2
      });
    }
  } else if (this.is_page()) {
    // Current page
    breadcrumbs.push({
      name: this.page.title,
      url: this.clean_url(this.url),
      position: 2
    });
  }

  return breadcrumbs;
});

// Generate technical article specific meta information
hexo.extend.helper.register('tech_article_meta', function () {
  if (!this.is_post()) return {};

  const meta = {
    difficulty: 'Beginner to Advanced',
    audience: 'Developers, Programmers, System Administrators',
    type: 'Quick Reference Guide',
    format: 'Cheat Sheet'
  };

  // Adjust difficulty based on category
  if (this.page.categories && this.page.categories.each) {
    this.page.categories.each(function (cat) {
      if (cat.name.includes('Linux') || cat.name.includes('Command')) {
        meta.difficulty = 'Intermediate to Advanced';
        meta.audience = 'System Administrators, DevOps Engineers, Developers';
      } else if (cat.name.includes('Programming')) {
        meta.audience = 'Developers, Software Engineers, Programmers';
      }
    });
  }

  return meta;
});
