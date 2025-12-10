# Microsoft Clarity Tracking Recommendations

## Current Events Being Tracked ✅

1. **Article/Blog Events**
   - `Open_Article_{sanitizedTitle}` - Article link clicks
   - `Article_Read_Complete` - 75% scroll completion

2. **Contact Form Events**
   - `Form_Abandon` - Form abandonment
   - `Form_Sent_Success` - Successful form submission

3. **Social Media Events**
   - `Click_Social_LinkedIn` - LinkedIn clicks
   - `Click_Social_GitHub` - GitHub clicks

4. **Project Card Events**
   - `Click_RaiTalk_Demo` - RaiTalk demo clicks
   - `Click_Trinka_Proto` - Trinka prototype clicks
   - `Click_MadhavFarm_Case` - Madhav Farm case study clicks

5. **Email Copy Event**
   - `Copy_Email` - Email address copied

---

## Recommended Additional Events to Track 🎯

### 1. Navigation & User Journey Events

#### **Navigation Clicks**
- `Nav_Click_Home` - Home navigation link clicked
- `Nav_Click_Work` - Work section navigation clicked
- `Nav_Click_Writing` - Writing/Blog navigation clicked
- `Nav_Click_Contact` - Contact page navigation clicked
- `Nav_Click_TrustedBy` - Trusted By section clicked
- `Nav_Click_Logo` - Logo/brand click (home navigation)

**Why Track:** Understand primary navigation patterns and which sections drive the most engagement.

#### **Section Visibility**
- `Section_View_Projects` - Projects section scrolled into view
- `Section_View_Writing` - Writing section scrolled into view
- `Section_View_TrustedBy` - Trusted By section viewed
- `Section_View_Hero` - Hero section viewed (landing engagement)

**Why Track:** Measure content discovery and which sections capture attention.

---

### 2. Homepage Engagement Events

#### **Hero Section**
- `Hero_RaiTalk_Click` - RaiTalk "Currently Building" card clicked
- `Hero_Scroll_Down` - User scrolls past hero section

**Why Track:** Measure interest in your current project and initial engagement.

#### **Featured Post**
- `Featured_Post_Click` - Featured blog post card clicked (homepage)
- `Featured_Post_Hover` - Featured post hovered (intent signal)

**Why Track:** Understand which content resonates most with visitors.

#### **Archive Link**
- `Click_View_Full_Archive` - "View Full Archive" link clicked

**Why Track:** Measure content exploration intent.

---

### 3. Project Engagement Events

#### **Project Card Interactions**
- `Project_Card_Hover_{slug}` - Project card hovered (e.g., `Project_Card_Hover_raitalk`)
- `Project_Card_Click_{slug}` - Project card clicked (navigate to detail)
- `Project_Code_Click_{slug}` - "Code" button clicked on project
- `Project_Demo_Click_{slug}` - Generic demo button click (beyond specific projects)

**Why Track:** Identify which projects generate the most interest and what actions users take.

#### **Project Detail Page** (if exists)
- `Project_Detail_View_{slug}` - Project detail page viewed
- `Project_Detail_Time_Spent_{slug}` - Time spent on project detail (30s, 1min, 2min thresholds)
- `Project_Detail_Scroll_{slug}` - Scroll depth on project detail (25%, 50%, 75%, 100%)

**Why Track:** Measure deep engagement with your work portfolio.

---

### 4. Blog/Content Engagement Events

#### **Blog Listing Page**
- `Blog_Page_View` - Blog listing page visited
- `Blog_Post_Hover_{slug}` - Blog post hovered in listing
- `Blog_Category_Filter_{category}` - Category filter used (if applicable)

**Why Track:** Understand content discovery patterns.

#### **Article Reading Behavior**
- `Article_Read_Start_{slug}` - Article reading started (page load)
- `Article_Read_25_Percent_{slug}` - 25% scroll depth
- `Article_Read_50_Percent_{slug}` - 50% scroll depth
- `Article_Read_75_Percent_{slug}` - 75% scroll depth (already have completion)
- `Article_Read_100_Percent_{slug}` - Full article read
- `Article_Time_Spent_{slug}` - Time-based engagement (30s, 1min, 2min, 5min)

**Why Track:** Measure content quality and engagement depth. Identify which articles are most engaging.

#### **Article Actions**
- `Article_Share_LinkedIn_{slug}` - LinkedIn share button clicked
- `Article_Share_Twitter_{slug}` - Twitter share button clicked
- `Article_Back_To_Home` - Back navigation from article
- `Article_Back_To_Blog` - Back to blog listing from article

**Why Track:** Measure content virality and user flow patterns.

---

### 5. Contact Form Deep Dive

#### **Form Field Interactions**
- `Form_Field_Focus_Name` - Name field focused
- `Form_Field_Focus_Email` - Email field focused
- `Form_Field_Focus_Message` - Message field focused
- `Form_Field_Complete_Name` - Name field completed
- `Form_Field_Complete_Email` - Email field completed
- `Form_Field_Complete_Message` - Message field completed

**Why Track:** Identify form friction points and where users drop off.

#### **Form Validation**
- `Form_Validation_Error` - Form validation error occurred
- `Form_Validation_Error_Email` - Email validation error
- `Form_Validation_Error_Required` - Required field error

**Why Track:** Understand technical issues preventing form completion.

#### **Form Engagement**
- `Form_Start_Typing` - User starts typing in any field
- `Form_Field_Switch` - User switches between fields (engagement signal)

**Why Track:** Measure form engagement and identify optimization opportunities.

---

### 6. External Link Tracking

#### **All External Links**
- `External_Link_Click_{domain}` - External link clicked (e.g., `External_Link_Click_raitalk.rajkawale.com`)
- `External_Link_Click_Project_{slug}` - Project external link clicked

**Why Track:** Measure outbound traffic and which projects drive external engagement.

---

### 7. User Intent & Behavior Events

#### **Scroll Behavior**
- `Scroll_Depth_25` - Page scrolled 25%
- `Scroll_Depth_50` - Page scrolled 50%
- `Scroll_Depth_75` - Page scrolled 75%
- `Scroll_Depth_100` - Full page scroll
- `Scroll_Back_To_Top` - User scrolls back to top

**Why Track:** Measure overall page engagement and content consumption.

#### **Time-Based Engagement**
- `Time_On_Page_30s` - 30 seconds on page
- `Time_On_Page_1min` - 1 minute on page
- `Time_On_Page_2min` - 2 minutes on page
- `Time_On_Page_5min` - 5 minutes on page

**Why Track:** Identify highly engaged users and content that holds attention.

#### **Return Visitor Behavior**
- `Return_Visitor_Homepage` - Returning visitor on homepage
- `Return_Visitor_Blog` - Returning visitor on blog
- `Return_Visitor_Contact` - Returning visitor on contact page

**Why Track:** Measure user retention and which pages bring users back.

---

### 8. Mobile-Specific Events

#### **Mobile Interactions**
- `Mobile_Menu_Open` - Mobile menu opened
- `Mobile_Menu_Close` - Mobile menu closed
- `Mobile_Menu_Nav_{section}` - Mobile menu navigation clicked

**Why Track:** Understand mobile user experience and navigation patterns.

---

### 9. Conversion Funnel Events

#### **Funnel Stages**
- `Funnel_Stage_1_Landing` - User lands on homepage
- `Funnel_Stage_2_Interest` - User views projects or blog
- `Funnel_Stage_3_Engagement` - User clicks on project/blog post
- `Funnel_Stage_4_Contact` - User visits contact page
- `Funnel_Stage_5_Submit` - User submits contact form

**Why Track:** Measure conversion funnel and identify drop-off points.

---

### 10. Content Performance Events

#### **Content Discovery**
- `Content_Discover_Projects` - User discovers projects section
- `Content_Discover_Blog` - User discovers blog section
- `Content_Discover_Featured_Post` - User discovers featured post

**Why Track:** Understand how users find and engage with your content.

#### **Content Comparison**
- `Content_Switch_Projects_To_Blog` - User switches from projects to blog
- `Content_Switch_Blog_To_Projects` - User switches from blog to projects
- `Content_Switch_To_Contact` - User switches to contact from any section

**Why Track:** Understand user journey and content preferences.

---

### 11. Error & Technical Events

#### **Error Tracking**
- `Error_404` - 404 page visited
- `Error_500` - Server error encountered
- `Error_Image_Load` - Image failed to load
- `Error_Script_Load` - Script failed to load

**Why Track:** Identify technical issues affecting user experience.

---

### 12. Search & Discovery Events

#### **Search Behavior** (if search exists)
- `Search_Initiated` - Search started
- `Search_Query_{query}` - Search query entered
- `Search_Result_Click` - Search result clicked

**Why Track:** Understand what users are looking for.

---

## Implementation Priority 🎯

### **High Priority** (Implement First)
1. Navigation clicks (`Nav_Click_*`)
2. Section visibility (`Section_View_*`)
3. Project card interactions (`Project_Card_*`)
4. Article reading depth (`Article_Read_*_Percent`)
5. Form field interactions (`Form_Field_*`)
6. Scroll depth tracking (`Scroll_Depth_*`)

### **Medium Priority** (Implement Next)
1. Time-based engagement (`Time_On_Page_*`)
2. External link tracking (`External_Link_Click_*`)
3. Featured post interactions
4. Conversion funnel events
5. Mobile-specific events

### **Low Priority** (Nice to Have)
1. Return visitor tracking
2. Content switching events
3. Error tracking
4. Search behavior (if applicable)

---

## Event Naming Convention 📝

**Format:** `Category_Action_Detail`

**Examples:**
- `Nav_Click_Home` ✅
- `Project_Card_Hover_raitalk` ✅
- `Article_Read_50_Percent_my-article` ✅
- `Form_Field_Focus_Email` ✅

**Avoid:**
- Spaces in event names
- Special characters (except underscores)
- Too generic names like `Click` or `View`
- Inconsistent casing (use Pascal_Case consistently)

---

## Analytics Questions These Events Answer 📊

1. **Which sections of my site are most engaging?**
   - Use: Section visibility, scroll depth, time on page

2. **What content drives the most interest?**
   - Use: Article reading depth, project card clicks, featured post interactions

3. **Where do users drop off in the conversion funnel?**
   - Use: Funnel stage events, form field interactions

4. **What projects generate the most engagement?**
   - Use: Project card interactions, external link clicks

5. **How do users navigate my site?**
   - Use: Navigation clicks, content switching events

6. **What technical issues affect user experience?**
   - Use: Error tracking, form validation errors

7. **Which content formats work best?**
   - Use: Article reading depth, time-based engagement

---

## Implementation Tips 💡

1. **Start Small:** Implement high-priority events first, then expand
2. **Test Events:** Use Clarity's event explorer to verify events are firing
3. **Document Events:** Keep a log of all events and their purposes
4. **Review Regularly:** Analyze event data monthly to identify trends
5. **Iterate:** Add new events based on questions that arise from data

---

## Example Implementation Code Snippets

### Navigation Tracking
```javascript
// In NavigationWrapper.astro or DesktopHeader.astro
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    const eventName = `Nav_Click_${getNavEventName(href)}`;
    trackEvent(eventName);
  });
});
```

### Section Visibility Tracking
```javascript
// Intersection Observer for section visibility
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      trackEvent(`Section_View_${sectionId}`);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => {
  observer.observe(section);
});
```

### Scroll Depth Tracking
```javascript
let maxScroll = 0;
window.addEventListener('scroll', () => {
  const scrollPercent = Math.round(
    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
  );
  
  if (scrollPercent >= 25 && maxScroll < 25) {
    trackEvent('Scroll_Depth_25');
    maxScroll = 25;
  } else if (scrollPercent >= 50 && maxScroll < 50) {
    trackEvent('Scroll_Depth_50');
    maxScroll = 50;
  }
  // ... continue for 75, 100
});
```

---

**Last Updated:** 2024
**Total Recommended Events:** 60+ events across 12 categories

