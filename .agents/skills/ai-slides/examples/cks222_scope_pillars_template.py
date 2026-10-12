import os
import sys
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

# =========================================================
# CONSTANTS & PALETTE (Dark modern tech palette)
# =========================================================
SLIDE_WIDTH_IN = 13.333333
SLIDE_HEIGHT_IN = 7.5

BG_DARK = RGBColor(15, 23, 42)        # #0F172A (Deep Slate 900)
CARD_BG = RGBColor(30, 41, 59)        # #1E293B (Card Slate 800)
CARD_BG_ALT = RGBColor(39, 53, 73)    # #273549 (Elevated Slate)
CARD_BORDER = RGBColor(51, 65, 85)    # #334155 (Subtle Slate Border)

PRIMARY = RGBColor(56, 189, 248)       # #38BDF8 (Sky Blue)
ACCENT_EMERALD = RGBColor(52, 211, 153) # #34D399 (Emerald Green)
ACCENT_AMBER = RGBColor(251, 191, 36)   # #FBBF24 (Gold / Amber)
ACCENT_ROSE = RGBColor(244, 63, 94)     # #F43F5E (Rose / Crimson)

BORDER_EMERALD = ACCENT_EMERALD
BORDER_ROSE = ACCENT_ROSE
BORDER_AMBER = ACCENT_AMBER
BORDER_PRIMARY = PRIMARY

TEXT_WHITE = RGBColor(248, 250, 252)   # #F8FAFC (Primary Text)
TEXT_LIGHT = RGBColor(226, 232, 240)   # #E2E8F0 (Body Text)
TEXT_MUTED = RGBColor(148, 163, 184)   # #94A3B8 (Subtitles & Notes)

FONT_HEADING = "Segoe UI"
FONT_BODY = "Segoe UI"

# =========================================================
# HELPER FUNCTIONS
# =========================================================
def create_base_presentation():
    prs = Presentation()
    prs.slide_width = Inches(SLIDE_WIDTH_IN)
    prs.slide_height = Inches(SLIDE_HEIGHT_IN)
    return prs

def add_slide_with_bg(prs):
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)
    bg = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE, 0, 0, Inches(SLIDE_WIDTH_IN), Inches(SLIDE_HEIGHT_IN)
    )
    bg.fill.solid()
    bg.fill.fore_color.rgb = BG_DARK
    bg.line.fill.background()
    return slide

def add_header(slide, badge_text, title_text, subtitle_text, badge_color=PRIMARY):
    # Badge Label
    badge_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.38), Inches(11.733), Inches(0.28))
    btf = badge_box.text_frame
    btf.word_wrap = True
    btf.margin_left = btf.margin_top = btf.margin_right = btf.margin_bottom = 0
    bp = btf.paragraphs[0]
    bp.text = badge_text.upper()
    bp.font.name = FONT_HEADING
    bp.font.size = Pt(9.5)
    bp.font.bold = True
    bp.font.color.rgb = badge_color

    # Main Title
    title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.68), Inches(11.733), Inches(0.55))
    ttf = title_box.text_frame
    ttf.word_wrap = True
    ttf.margin_left = ttf.margin_top = ttf.margin_right = ttf.margin_bottom = 0
    tp = ttf.paragraphs[0]
    tp.text = title_text
    tp.font.name = FONT_HEADING
    tp.font.size = Pt(21)
    tp.font.bold = True
    tp.font.color.rgb = TEXT_WHITE

    # Subtitle
    sub_box = slide.shapes.add_textbox(Inches(0.8), Inches(1.24), Inches(11.733), Inches(0.35))
    stf = sub_box.text_frame
    stf.word_wrap = True
    stf.margin_left = stf.margin_top = stf.margin_right = stf.margin_bottom = 0
    sp = stf.paragraphs[0]
    sp.text = subtitle_text
    sp.font.name = FONT_BODY
    sp.font.size = Pt(11.5)
    sp.font.color.rgb = TEXT_MUTED

    # Header Divider Line
    line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(1.65), Inches(11.733), Inches(0.015))
    line.fill.solid()
    line.fill.fore_color.rgb = CARD_BORDER
    line.line.fill.background()

def add_card(slide, left, top, width, height, bg_color=CARD_BG, border_color=CARD_BORDER, border_width_pt=1):
    card = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE, Inches(left), Inches(top), Inches(width), Inches(height)
    )
    card.fill.solid()
    card.fill.fore_color.rgb = bg_color
    if border_color:
        card.line.color.rgb = border_color
        card.line.width = Pt(border_width_pt)
    else:
        card.line.fill.background()
    return card

def format_cell(cell, text, font_size=10, bold=False, color=TEXT_LIGHT, bg_color=None, align=PP_ALIGN.LEFT):
    if bg_color:
        cell.fill.solid()
        cell.fill.fore_color.rgb = bg_color
    cell.vertical_anchor = MSO_ANCHOR.MIDDLE
    tf = cell.text_frame
    tf.word_wrap = True
    tf.margin_left = Inches(0.12)
    tf.margin_right = Inches(0.12)
    tf.margin_top = Inches(0.06)
    tf.margin_bottom = Inches(0.06)
    p = tf.paragraphs[0]
    p.text = str(text)
    p.alignment = align
    p.font.name = FONT_BODY
    p.font.size = Pt(font_size)
    p.font.bold = bold
    p.font.color.rgb = color


# =========================================================
# SLIDE 1: Title & RACI Allocations
# =========================================================
def build_slide_1(prs):
    slide = add_slide_with_bg(prs)
    add_header(
        slide,
        badge_text="CKS222 ADVANCED SOFTWARE ENGINEERING | GROUP 2 - THEME 1",
        title_text="CKS222 Scope Pillars: Quality Attributes vs. Constraints",
        subtitle_text="Navigating Non-Functional Trade-Offs & Hard Boundaries in Mission-Critical Systems",
        badge_color=PRIMARY
    )

    # Context Card Banner
    banner = add_card(slide, left=0.8, top=1.82, width=11.733, height=0.62, bg_color=CARD_BG, border_color=CARD_BORDER)
    btf = banner.text_frame
    btf.word_wrap = True
    btf.margin_left = Inches(0.2)
    btf.margin_top = Inches(0.12)
    bp = btf.paragraphs[0]
    bp.text = "ACADEMIC WORKSHOP & INDUSTRY DISSECTION  |  10-MINUTE STRICT PRECISION DELIVERY"
    bp.font.name = FONT_HEADING
    bp.font.size = Pt(11)
    bp.font.bold = True
    bp.font.color.rgb = PRIMARY
    
    bp2 = btf.add_paragraph()
    bp2.text = "Core Subject: Software Architecture Scope Governance  |  Industrial Anchor: Grab SuperApp Production Infrastructure"
    bp2.font.name = FONT_BODY
    bp2.font.size = Pt(10)
    bp2.font.color.rgb = TEXT_MUTED

    # RACI Container Card
    add_card(slide, left=0.8, top=2.58, width=11.733, height=3.95, bg_color=CARD_BG, border_color=CARD_BORDER)

    # RACI Table inside container
    rows = 6
    cols = 4
    table_shape = slide.shapes.add_table(rows, cols, Inches(0.95), Inches(2.72), Inches(11.433), Inches(3.2))
    table = table_shape.table
    table.columns[0].width = Inches(3.2)   # Member Name & ID
    table.columns[1].width = Inches(1.3)   # RACI Designation
    table.columns[2].width = Inches(2.8)   # Primary Session Role
    table.columns[3].width = Inches(4.133) # Workshop Deliverable & Ownership

    headers = ["Team Member (Student ID)", "RACI Code", "Session Role", "Workshop Responsibility & Ownership"]
    for col_idx, h_text in enumerate(headers):
        format_cell(table.cell(0, col_idx), h_text, font_size=10.5, bold=True, color=PRIMARY, bg_color=RGBColor(21, 32, 48), align=PP_ALIGN.CENTER if col_idx == 1 else PP_ALIGN.LEFT)

    raci_data = [
        ("Aly Irwanshah Bin Azman (24304970)", "[R] Responsible", "Co-Presenter (Theory & Pillar 1 Lead)", "Theory & Pillar 1 Lead: Delivers trade-off models and Texas DIR quantification."),
        ("Gabriel Gan Heng Qing (24304331)", "[R] Responsible", "Co-Presenter (Constraint & Case Lead)", "Constraint & Case Study Lead: Delivers Pillar 2 boundaries and Grab SuperApp dissection."),
        ("Muhammad Yusri Bin Epiyusra (24304694)", "[S/R] Support/Resp.", "Content Architect", "Content Architect: Designs technical rubric alignment, comparative matrices & deck architecture."),
        ("Lim Chin Jiek (24304094)", "[A] Accountable", "Challenge Lead (Live Poll Anchor)", "Challenge Lead: Directs audience interactive challenge, timing, and real-time response capture."),
        ("Chiew Yee Fan (25100545)", "[A] Accountable", "Technical Auditor & Q&A Lead", "Technical Auditor & Q&A Lead: Manages eLearn audit verification, validation rules, and panel Q&A.")
    ]

    raci_colors = {
        "[R] Responsible": ACCENT_EMERALD,
        "[S/R] Support/Resp.": PRIMARY,
        "[A] Accountable": ACCENT_AMBER
    }

    for row_idx, row in enumerate(raci_data, start=1):
        bg_c = CARD_BG if row_idx % 2 != 0 else CARD_BG_ALT
        format_cell(table.cell(row_idx, 0), row[0], font_size=10, bold=True, color=TEXT_WHITE, bg_color=bg_c)
        r_color = raci_colors.get(row[1], TEXT_WHITE)
        format_cell(table.cell(row_idx, 1), row[1], font_size=10, bold=True, color=r_color, bg_color=bg_c, align=PP_ALIGN.CENTER)
        format_cell(table.cell(row_idx, 2), row[2], font_size=9.5, bold=False, color=TEXT_LIGHT, bg_color=bg_c)
        format_cell(table.cell(row_idx, 3), row[3], font_size=9.5, bold=False, color=TEXT_MUTED, bg_color=bg_c)

    # Bottom RACI Definition Legend Box
    leg_box = slide.shapes.add_textbox(Inches(0.95), Inches(6.05), Inches(11.433), Inches(0.4))
    ltf = leg_box.text_frame
    ltf.word_wrap = True
    ltf.margin_left = ltf.margin_top = ltf.margin_right = ltf.margin_bottom = 0
    lp = ltf.paragraphs[0]
    lp.text = "RACI Framework Alignment: "
    lp.font.name = FONT_HEADING
    lp.font.size = Pt(9.5)
    lp.font.bold = True
    lp.font.color.rgb = PRIMARY

    run1 = lp.add_run()
    run1.text = "[R] Responsible: "
    run1.font.bold = True
    run1.font.color.rgb = ACCENT_EMERALD
    run1_b = lp.add_run()
    run1_b.text = "Executes concept delivery & case analysis.   "
    run1_b.font.color.rgb = TEXT_MUTED

    run2 = lp.add_run()
    run2.text = "[A] Accountable: "
    run2.font.bold = True
    run2.font.color.rgb = ACCENT_AMBER
    run2_b = lp.add_run()
    run2_b.text = "Owns peer poll engagement, audit submission & Q&A defense.   "
    run2_b.font.color.rgb = TEXT_MUTED

    run3 = lp.add_run()
    run3.text = "[S] Support: "
    run3.font.bold = True
    run3.font.color.rgb = PRIMARY
    run3_b = lp.add_run()
    run3_b.text = "Architects content and technical structure."
    run3_b.font.color.rgb = TEXT_MUTED


# =========================================================
# SLIDE 2: Workshop Architecture: 10-Minute Strict Roadmap
# =========================================================
def build_slide_2(prs):
    slide = add_slide_with_bg(prs)
    add_header(
        slide,
        badge_text="WORKSHOP PACING & AGENDA MANAGEMENT",
        title_text="Workshop Architecture: 10-Minute Strict Roadmap",
        subtitle_text="Synchronized dual-phase delivery: 7-minute core theory & industrial case, followed by 3-minute peer challenge.",
        badge_color=PRIMARY
    )

    # Left Column: Part A Card (7 Minutes)
    card_a = add_card(slide, left=0.8, top=1.82, width=5.72, height=4.65, bg_color=CARD_BG, border_color=CARD_BORDER)
    atf = card_a.text_frame
    atf.word_wrap = True
    atf.margin_left = Inches(0.25)
    atf.margin_right = Inches(0.25)
    atf.margin_top = Inches(0.2)

    p = atf.paragraphs[0]
    p.text = "PART A: Concept & Grab Production Case"
    p.font.name = FONT_HEADING
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = PRIMARY

    p_sub = atf.add_paragraph()
    p_sub.text = "Duration: 7 Mins (00:00 - 07:00) | Leads: Aly Irwanshah [R] & Gabriel Gan [R]"
    p_sub.font.name = FONT_BODY
    p_sub.font.size = Pt(10)
    p_sub.font.color.rgb = TEXT_MUTED

    part_a_items = [
        ("00:00 - 01:30 (90s)", "Theoretical Foundation & Core Scope Taxonomy", 
         "Aly Irwanshah [R]: Differentiating internal trade-offs (continuous spectrum) from external boundaries (binary compliance)."),
        ("01:30 - 03:30 (120s)", "Pillar 1 Deep Dive: Texas DIR (2008) Framework", 
         "Aly Irwanshah [R]: Quantifying Quality Attributes (Reliability >=99.9%, Latency <=2.0s, Maintainability, Portability)."),
        ("03:30 - 05:00 (90s)", "Pillar 2 Deep Dive: Architectural Constraints", 
         "Gabriel Gan [R]: Dissecting non-negotiables: Technology Limits, OS Platform Runtimes, and Compliance (PDPA, PCI-DSS, IEC 62304)."),
        ("05:00 - 07:00 (120s)", "Industrial Case Study: Grab SuperApp Production", 
         "Gabriel Gan [R]: Production mapping: Dispatch algorithm, BNM RMiT audit ledger, Android 8.0 baseline, 99.99% payment uptime.")
    ]

    for time_str, title_str, desc_str in part_a_items:
        pt = atf.add_paragraph()
        pt.space_before = Pt(8)
        run_t = pt.add_run()
        run_t.text = f"{time_str} | {title_str}\n"
        run_t.font.name = FONT_HEADING
        run_t.font.size = Pt(10)
        run_t.font.bold = True
        run_t.font.color.rgb = ACCENT_EMERALD

        run_d = pt.add_run()
        run_d.text = desc_str
        run_d.font.name = FONT_BODY
        run_d.font.size = Pt(9)
        run_d.font.color.rgb = TEXT_LIGHT

    # Right Column: Part B Card (3 Minutes)
    card_b = add_card(slide, left=6.81, top=1.82, width=5.72, height=4.65, bg_color=CARD_BG, border_color=CARD_BORDER)
    btf = card_b.text_frame
    btf.word_wrap = True
    btf.margin_left = Inches(0.25)
    btf.margin_right = Inches(0.25)
    btf.margin_top = Inches(0.2)

    p2 = btf.paragraphs[0]
    p2.text = "PART B: Live Peer Challenge & Synthesis"
    p2.font.name = FONT_HEADING
    p2.font.size = Pt(13)
    p2.font.bold = True
    p2.font.color.rgb = ACCENT_AMBER

    p2_sub = btf.add_paragraph()
    p2_sub.text = "Duration: 3 Mins (07:00 - 10:00) | Leads: Lim Chin Jiek [A] & Chiew Yee Fan [A]"
    p2_sub.font.name = FONT_BODY
    p2_sub.font.size = Pt(10)
    p2_sub.font.color.rgb = TEXT_MUTED

    part_b_items = [
        ("07:00 - 08:30 (90s)", "Interactive Live Peer Challenge (4 Grab Specs)", 
         "Lim Chin Jiek [A]: Audience real-time polling on 4 production specifications: [A] Quality Attribute vs. [B] Constraint."),
        ("08:30 - 09:30 (60s)", "Challenge Solutions & Official eLearn Audit", 
         "Chiew Yee Fan [A]: Authoritative answer reveal (B, A, B, A) and display of exact 'One Key Rule' text for MS Form audit verification."),
        ("09:30 - 10:00 (30s)", "Synthesis, A-SPSRI Guardrails & Q&A Handover", 
         "Chiew Yee Fan [A] & Team: Preventing scope collapse, closing architectural takeaways, and formal handover to audience Q&A.")
    ]

    for time_str, title_str, desc_str in part_b_items:
        pt2 = btf.add_paragraph()
        pt2.space_before = Pt(10)
        run_t = pt2.add_run()
        run_t.text = f"{time_str} | {title_str}\n"
        run_t.font.name = FONT_HEADING
        run_t.font.size = Pt(10)
        run_t.font.bold = True
        run_t.font.color.rgb = ACCENT_AMBER

        run_d = pt2.add_run()
        run_d.text = desc_str
        run_d.font.name = FONT_BODY
        run_d.font.size = Pt(9)
        run_d.font.color.rgb = TEXT_LIGHT

    # Bottom Pacing Guardrail Callout
    guard_card = add_card(slide, left=0.8, top=6.6, width=11.733, height=0.48, bg_color=CARD_BG_ALT, border_color=CARD_BORDER)
    gtf = guard_card.text_frame
    gtf.word_wrap = True
    gtf.margin_left = Inches(0.2)
    gtf.margin_top = Inches(0.08)
    gp = gtf.paragraphs[0]
    gp.text = "Strict Timekeeping Protocol: "
    gp.font.name = FONT_HEADING
    gp.font.size = Pt(9.5)
    gp.font.bold = True
    gp.font.color.rgb = ACCENT_ROSE

    gr1 = gp.add_run()
    gr1.text = "Micro-timers programmed at 05:00 (Case Study transition) and 07:00 (Challenge launch) to guarantee exact 10:00 rubric compliance."
    gr1.font.name = FONT_BODY
    gr1.font.size = Pt(9.5)
    gr1.font.color.rgb = TEXT_LIGHT


# =========================================================
# SLIDE 3: Theoretical Foundation (Pillar 1 vs. Pillar 2)
# =========================================================
def build_slide_3(prs):
    slide = add_slide_with_bg(prs)
    add_header(
        slide,
        badge_text="THEORETICAL FOUNDATION",
        title_text="Theoretical Foundation: Pillar 1 vs. Pillar 2",
        subtitle_text="Demarcating internally engineered trade-offs from non-negotiable external design boundaries.",
        badge_color=PRIMARY
    )

    # Left Column: Pillar 1 Card (Emerald)
    p1_card = add_card(slide, left=0.8, top=1.82, width=5.72, height=4.55, bg_color=CARD_BG, border_color=BORDER_EMERALD, border_width_pt=1.5)
    p1tf = p1_card.text_frame
    p1tf.word_wrap = True
    p1tf.margin_left = Inches(0.25)
    p1tf.margin_right = Inches(0.25)
    p1tf.margin_top = Inches(0.2)

    p1 = p1tf.paragraphs[0]
    p1.text = "PILLAR 1: Quality Attributes"
    p1.font.name = FONT_HEADING
    p1.font.size = Pt(13.5)
    p1.font.bold = True
    p1.font.color.rgb = ACCENT_EMERALD

    p1_sub = p1tf.add_paragraph()
    p1_sub.text = "The 'How Well' Dimension | Internally Chosen NFRs"
    p1_sub.font.name = FONT_BODY
    p1_sub.font.size = Pt(10)
    p1_sub.font.color.rgb = TEXT_MUTED

    p1_points = [
        ("Core Definition", "Defines the quality, efficiency, and operational excellence of system capabilities."),
        ("Evaluation Nature", "Continuous Spectrum / Sliding Scale (e.g., 99.9% uptime, 1.8s latency, 85% test coverage). NOT binary."),
        ("Architectural Discretion", "HIGH DISCRETION: The engineering team freely selects trade-off balance points (e.g. latency vs. consistency, security vs. developer speed)."),
        ("Governance Standard", "Managed via Service Level Objectives (SLOs), Texas DIR (2008) metrics, and synthetic load tests."),
        ("Consequence of Deficit", "Graceful performance degradation, minor user experience friction, or increased cloud compute bills.")
    ]

    for title_str, desc_str in p1_points:
        p = p1tf.add_paragraph()
        p.space_before = Pt(7)
        rt = p.add_run()
        rt.text = f"* {title_str}: "
        rt.font.name = FONT_HEADING
        rt.font.size = Pt(9.5)
        rt.font.bold = True
        rt.font.color.rgb = TEXT_WHITE

        rd = p.add_run()
        rd.text = desc_str
        rd.font.name = FONT_BODY
        rd.font.size = Pt(9)
        rd.font.color.rgb = TEXT_LIGHT

    # Right Column: Pillar 2 Card (Rose)
    p2_card = add_card(slide, left=6.81, top=1.82, width=5.72, height=4.55, bg_color=CARD_BG, border_color=BORDER_ROSE, border_width_pt=1.5)
    p2tf = p2_card.text_frame
    p2tf.word_wrap = True
    p2tf.margin_left = Inches(0.25)
    p2tf.margin_right = Inches(0.25)
    p2tf.margin_top = Inches(0.2)

    p2 = p2tf.paragraphs[0]
    p2.text = "PILLAR 2: Architectural Constraints"
    p2.font.name = FONT_HEADING
    p2.font.size = Pt(13.5)
    p2.font.bold = True
    p2.font.color.rgb = ACCENT_ROSE

    p2_sub = p2tf.add_paragraph()
    p2_sub.text = "The 'Boundary' Dimension | Externally Mandated Limits"
    p2_sub.font.name = FONT_BODY
    p2_sub.font.size = Pt(10)
    p2_sub.font.color.rgb = TEXT_MUTED

    p2_points = [
        ("Core Definition", "Hard constraints and inviolable limitations placed upon the design space before engineering begins."),
        ("Evaluation Nature", "Binary Compliance (Pass or Fail, 1 or 0). A system either satisfies the constraint or violates it completely."),
        ("Architectural Discretion", "ZERO DISCRETION: Imposed externally by regulators, client hardware, or enterprise stacks. CANNOT be traded away."),
        ("Governance Standard", "Managed via statutory audits, legal counsel, OS platform store reviews, and data protection commissions."),
        ("Consequence of Deficit", "Immediate regulatory shutdown, operating license revocation, app store rejection, or legal liability.")
    ]

    for title_str, desc_str in p2_points:
        p = p2tf.add_paragraph()
        p.space_before = Pt(7)
        rt = p.add_run()
        rt.text = f"* {title_str}: "
        rt.font.name = FONT_HEADING
        rt.font.size = Pt(9.5)
        rt.font.bold = True
        rt.font.color.rgb = TEXT_WHITE

        rd = p.add_run()
        rd.text = desc_str
        rd.font.name = FONT_BODY
        rd.font.size = Pt(9)
        rd.font.color.rgb = TEXT_LIGHT

    # Bottom Architectural Axiom Card
    axiom_card = add_card(slide, left=0.8, top=6.48, width=11.733, height=0.55, bg_color=CARD_BG_ALT, border_color=PRIMARY, border_width_pt=1)
    atf = axiom_card.text_frame
    atf.word_wrap = True
    atf.margin_left = Inches(0.2)
    atf.margin_top = Inches(0.1)
    ap = atf.paragraphs[0]
    ap.text = "The Golden Rule: "
    ap.font.name = FONT_HEADING
    ap.font.size = Pt(10)
    ap.font.bold = True
    ap.font.color.rgb = PRIMARY

    ar = ap.add_run()
    ar.text = "Architects negotiate, prioritize, and optimize Quality Attributes along a continuous curve; architects submit to, enforce, and comply with Constraints as rigid boundary walls."
    ar.font.name = FONT_BODY
    ar.font.size = Pt(10)
    ar.font.color.rgb = TEXT_WHITE


# =========================================================
# SLIDE 4: Pillar 1 Deep Dive: Quality Attributes
# =========================================================
def build_slide_4(prs):
    slide = add_slide_with_bg(prs)
    add_header(
        slide,
        badge_text="PILLAR 1 DEEP DIVE: QUALITY ATTRIBUTES",
        title_text="Pillar 1 Deep Dive: Quantifiable Quality Attributes",
        subtitle_text="Adhering to the Texas DIR (2008) Framework: Eliminating ambiguity with verifiable metrics and thresholds.",
        badge_color=ACCENT_EMERALD
    )

    # Top Context Card: Texas DIR (2008) Mandate
    texas_card = add_card(slide, left=0.8, top=1.82, width=11.733, height=0.68, bg_color=CARD_BG, border_color=BORDER_EMERALD, border_width_pt=1)
    ttf = texas_card.text_frame
    ttf.word_wrap = True
    ttf.margin_left = Inches(0.2)
    ttf.margin_top = Inches(0.1)
    tp = ttf.paragraphs[0]
    tp.text = "TEXAS DIR (2008) ARCHITECTURAL MANDATE: "
    tp.font.name = FONT_HEADING
    tp.font.size = Pt(10)
    tp.font.bold = True
    tp.font.color.rgb = ACCENT_EMERALD

    tp_run = tp.add_run()
    tp_run.text = "Vague qualitative goals ('fast', 'highly reliable', 'modular') are rejected. Every Quality Attribute MUST possess: (1) A measurable operational metric, (2) A clear numerical threshold, and (3) A defined stress context."
    tp_run.font.name = FONT_BODY
    tp_run.font.size = Pt(9.5)
    tp_run.font.color.rgb = TEXT_LIGHT

    # 4 Cards in 2x2 Grid
    cards_data = [
        # Col 1, Row 1
        (0.8, 2.62, 5.72, 2.05, "1. Reliability & Fault Tolerance", ACCENT_EMERALD, [
            ("Core Metric & Threshold", "Service Availability >= 99.9% uptime (<= 8.76 hrs unplanned downtime/year)."),
            ("Operational Condition", "Continuous 24/7 production traffic under automated multi-AZ cloud failover."),
            ("Verification Method", "Automated synthetic canary probes; MTBF >= 720 hrs, MTTR <= 15 minutes.")
        ]),
        # Col 2, Row 1
        (6.81, 2.62, 5.72, 2.05, "2. Efficiency & Performance Latency", PRIMARY, [
            ("Core Metric & Threshold", "End-to-end API response latency <= 2.0s at P95 percentile; <= 3.5s at P99."),
            ("Operational Condition", "Sustained peak workload of 10,000 concurrent requests/sec with Redis hit ratio >= 85%."),
            ("Verification Method", "Distributed APM tracing (OpenTelemetry); automated k6/JMeter CI load gates.")
        ]),
        # Col 1, Row 2
        (0.8, 4.82, 5.72, 2.05, "3. Maintainability & Code Health", ACCENT_AMBER, [
            ("Core Metric & Threshold", "Test coverage >= 80%; Cyclomatic complexity <= 10/method; Mean Time to Patch <= 15 mins."),
            ("Operational Condition", "Evaluated across all microservice release pull requests prior to trunk merge."),
            ("Verification Method", "SonarQube static analysis quality gate failing builds when technical debt ratio > 5%.")
        ]),
        # Col 2, Row 2
        (6.81, 4.82, 5.72, 2.05, "4. Portability & Environmental Independence", TEXT_WHITE, [
            ("Core Metric & Threshold", "100% cloud-agnostic execution; 0 lines of code change between AWS EKS and GCP GKE."),
            ("Operational Condition", "Disaster recovery failover or orchestration migration; 12-factor ENV configuration."),
            ("Verification Method", "Automated multi-arch OCI container images verified via multi-cloud canary deployments.")
        ])
    ]

    for left_c, top_c, w_c, h_c, title_c, color_c, items_c in cards_data:
        c_shape = add_card(slide, left=left_c, top=top_c, width=w_c, height=h_c, bg_color=CARD_BG, border_color=CARD_BORDER)
        ctf = c_shape.text_frame
        ctf.word_wrap = True
        ctf.margin_left = Inches(0.2)
        ctf.margin_right = Inches(0.2)
        ctf.margin_top = Inches(0.12)
        
        cp = ctf.paragraphs[0]
        cp.text = title_c
        cp.font.name = FONT_HEADING
        cp.font.size = Pt(11)
        cp.font.bold = True
        cp.font.color.rgb = color_c

        for sub_label, sub_val in items_c:
            p_sub = ctf.add_paragraph()
            p_sub.space_before = Pt(4)
            r_lbl = p_sub.add_run()
            r_lbl.text = f"{sub_label}: "
            r_lbl.font.name = FONT_HEADING
            r_lbl.font.size = Pt(9)
            r_lbl.font.bold = True
            r_lbl.font.color.rgb = TEXT_WHITE

            r_val = p_sub.add_run()
            r_val.text = sub_val
            r_val.font.name = FONT_BODY
            r_val.font.size = Pt(8.8)
            r_val.font.color.rgb = TEXT_MUTED


# =========================================================
# SLIDE 5: Pillar 2 Deep Dive: Architectural Constraints
# =========================================================
def build_slide_5(prs):
    slide = add_slide_with_bg(prs)
    add_header(
        slide,
        badge_text="PILLAR 2 DEEP DIVE: ARCHITECTURAL CONSTRAINTS",
        title_text="Pillar 2 Deep Dive: Architectural Constraints",
        subtitle_text="Externally imposed, non-negotiable boundaries that strictly enclose the solution space.",
        badge_color=ACCENT_ROSE
    )

    columns_data = [
        # Column 1
        (0.8, 1.82, 3.65, 5.2, "1. Technology Limits", "ENTERPRISE & STACK BOUNDARIES", PRIMARY, [
            ("Origin & Enforcer", "Corporate enterprise architects, pre-existing legacy assets, and hardware fleet capabilities."),
            ("Mandate 1: RDBMS", "Must strictly interface with enterprise PostgreSQL 15+ cluster (prohibiting unvetted NoSQL engines)."),
            ("Mandate 2: Protocol", "Mandatory gRPC over HTTP/2 for all internal service RPCs to comply with centralized service mesh."),
            ("Mandate 3: Hardware", "Edge deployment nodes capped at 512MB RAM ceiling and ARM64 architecture."),
            ("Architectural Reality", "Zero trade-off freedom. The software architecture MUST fit into the pre-existing infrastructure envelope.")
        ]),
        # Column 2
        (4.84, 1.82, 3.65, 5.2, "2. Platform Requirements", "OS & SANDBOX ENCLOSURES", ACCENT_AMBER, [
            ("Origin & Enforcer", "Mobile OS gatekeepers (Apple/Google), hardware sensor constraints, and application stores."),
            ("Mandate 1: Android SDK", "Minimum SDK baseline set to Android 8.0 (API Level 26) due to driver smartphone fleet demographics in SEA."),
            ("Mandate 2: iOS Sandbox", "Strict adherence to Apple App Tracking Transparency (ATT) and hard 30s background task execution kill."),
            ("Mandate 3: Web Runtimes", "Cross-Origin Opener Policy (COOP) and WebAssembly thread pooling memory boundaries."),
            ("Architectural Reality", "Violation leads to automatic app store rejection or background OS termination by device watchdog.")
        ]),
        # Column 3
        (8.88, 1.82, 3.65, 5.2, "3. Compliance & Location", "STATUTORY & REGULATORY LAWS", ACCENT_ROSE, [
            ("Origin & Enforcer", "National central banks, government data protection commissions, and global standard bodies."),
            ("Mandate 1: PDPA 2010", "Malaysia Personal Data Protection Act requires citizen PII data residency within sovereign cloud regions."),
            ("Mandate 2: PCI-DSS v4.0", "Zero plaintext Primary Account Number (PAN) storage; mandatory HSM tokenization and TLS 1.3 encryption."),
            ("Mandate 3: BNM & Safety", "BNM RMiT (Risk Management in Tech) financial audit trails and IEC 62304 safety lifecycles."),
            ("Architectural Reality", "Non-negotiable legal liability. Violations cause immediate operating license revocation or criminal penalties.")
        ])
    ]

    for left_c, top_c, w_c, h_c, title_c, badge_c, color_c, items_c in columns_data:
        c_shape = add_card(slide, left=left_c, top=top_c, width=w_c, height=h_c, bg_color=CARD_BG, border_color=CARD_BORDER)
        ctf = c_shape.text_frame
        ctf.word_wrap = True
        ctf.margin_left = Inches(0.2)
        ctf.margin_right = Inches(0.2)
        ctf.margin_top = Inches(0.18)

        # Badge pill
        bp = ctf.paragraphs[0]
        bp.text = badge_c
        bp.font.name = FONT_HEADING
        bp.font.size = Pt(8.5)
        bp.font.bold = True
        bp.font.color.rgb = color_c

        # Title
        tp = ctf.add_paragraph()
        tp.space_before = Pt(2)
        tp.text = title_c
        tp.font.name = FONT_HEADING
        tp.font.size = Pt(12)
        tp.font.bold = True
        tp.font.color.rgb = TEXT_WHITE

        # Divider line inside card
        dp = ctf.add_paragraph()
        dp.text = "-----------------------------"
        dp.font.name = FONT_HEADING
        dp.font.size = Pt(6)
        dp.font.color.rgb = CARD_BORDER

        for sub_h, sub_d in items_c:
            ip = ctf.add_paragraph()
            ip.space_before = Pt(5)
            ir1 = ip.add_run()
            ir1.text = f"{sub_h}\n"
            ir1.font.name = FONT_HEADING
            ir1.font.size = Pt(9)
            ir1.font.bold = True
            ir1.font.color.rgb = color_c

            ir2 = ip.add_run()
            ir2.text = sub_d
            ir2.font.name = FONT_BODY
            ir2.font.size = Pt(8.5)
            ir2.font.color.rgb = TEXT_LIGHT


# =========================================================
# SLIDE 6: Industrial Case Study (Grab SuperApp)
# =========================================================
def build_slide_6(prs):
    slide = add_slide_with_bg(prs)
    add_header(
        slide,
        badge_text="INDUSTRIAL CASE STUDY: HIGH-CONCURRENCY URBAN MOBILITY",
        title_text="Industrial Case Study: Grab SuperApp Architecture",
        subtitle_text="Dissecting real-world Scope Pillars in Southeast Asia's leading multi-service platform.",
        badge_color=PRIMARY
    )

    # Subtitle context banner
    sub_banner = add_card(slide, left=0.8, top=1.82, width=11.733, height=0.55, bg_color=CARD_BG, border_color=CARD_BORDER)
    stf = sub_banner.text_frame
    stf.word_wrap = True
    stf.margin_left = Inches(0.2)
    stf.margin_top = Inches(0.1)
    sp = stf.paragraphs[0]
    sp.text = "PRODUCTION ARCHITECTURE MAPPING: "
    sp.font.name = FONT_HEADING
    sp.font.size = Pt(9.5)
    sp.font.bold = True
    sp.font.color.rgb = PRIMARY
    
    sr = sp.add_run()
    sr.text = "Analyzing trade-offs vs. boundary compliance across Grab's transport, fintech, and driver-partner ecosystems."
    sr.font.name = FONT_BODY
    sr.font.size = Pt(9.5)
    sr.font.color.rgb = TEXT_MUTED

    # Table Container
    rows = 5
    cols = 5
    table_shape = slide.shapes.add_table(rows, cols, Inches(0.8), Inches(2.48), Inches(11.733), Inches(4.55))
    table = table_shape.table
    table.columns[0].width = Inches(2.2)    # Component
    table.columns[1].width = Inches(1.8)    # Scope Pillar
    table.columns[2].width = Inches(1.6)    # Dimension
    table.columns[3].width = Inches(3.3)    # Production Spec
    table.columns[4].width = Inches(2.833)  # Trade-off & Decision

    headers = ["Grab System Component", "Scope Pillar", "Dimension", "Production Specification (Quantified)", "Architectural Trade-Off & Rationale"]
    for col_idx, h_text in enumerate(headers):
        format_cell(table.cell(0, col_idx), h_text, font_size=10, bold=True, color=PRIMARY, bg_color=RGBColor(21, 32, 48), align=PP_ALIGN.CENTER if col_idx in [1, 2] else PP_ALIGN.LEFT)

    table_data = [
        (
            "Dynamic Dispatch Engine\n(Driver-Rider Matching)",
            "Quality Attribute\n(Pillar 1)",
            "Efficiency /\nLatency",
            "Match passenger & nearest driver in <= 1.8s for 99% of requests during peak rain surges.",
            "Traded route optimality for sub-second latency; leverages Uber H3 spatial hexagons pre-cached in Redis.",
            ACCENT_EMERALD
        ),
        (
            "GrabPay Financial Ledger\n(Audit Trail System)",
            "Constraint\n(Pillar 2)",
            "Compliance /\nBNM RMiT",
            "Immutable financial transaction audit trail retained for >= 7 years with append-only WORM cloud storage.",
            "Bank Negara Malaysia regulatory prerequisite to retain e-money license. ZERO trade-off permitted.",
            ACCENT_ROSE
        ),
        (
            "Grab Driver Mobile Client\n(SEA Fleet Devices)",
            "Constraint\n(Pillar 2)",
            "Platform /\nOS Baseline",
            "Must execute reliably on Android 8.0+ (API Level 26) with maximum base APK download size <= 35MB.",
            "Dictated by driver budget smartphones in SEA; restricts modern Android APIs; forces aggressive ProGuard splitting.",
            ACCENT_ROSE
        ),
        (
            "Payment Checkout Gateway\n(Core Settlement)",
            "Quality Attribute\n(Pillar 1)",
            "Reliability /\nAvailability",
            "Core payment processing gateway availability >= 99.99% ('four nines', <= 52.6 mins downtime/year).",
            "Engineered via active-active multi-region cloud redundancy; engineering accepted 40% higher cloud infrastructure cost.",
            ACCENT_EMERALD
        )
    ]

    for row_idx, (comp, pillar, dim, spec, rationale, p_color) in enumerate(table_data, start=1):
        bg_c = CARD_BG if row_idx % 2 != 0 else CARD_BG_ALT
        format_cell(table.cell(row_idx, 0), comp, font_size=9.5, bold=True, color=TEXT_WHITE, bg_color=bg_c)
        format_cell(table.cell(row_idx, 1), pillar, font_size=9.5, bold=True, color=p_color, bg_color=bg_c, align=PP_ALIGN.CENTER)
        format_cell(table.cell(row_idx, 2), dim, font_size=9, bold=False, color=TEXT_LIGHT, bg_color=bg_c, align=PP_ALIGN.CENTER)
        format_cell(table.cell(row_idx, 3), spec, font_size=9, bold=False, color=TEXT_LIGHT, bg_color=bg_c)
        format_cell(table.cell(row_idx, 4), rationale, font_size=8.8, bold=False, color=TEXT_MUTED, bg_color=bg_c)


# =========================================================
# SLIDE 7: Part B: Interactive Peer Challenge
# =========================================================
def build_slide_7(prs):
    slide = add_slide_with_bg(prs)
    add_header(
        slide,
        badge_text="PART B: INTERACTIVE WORKSHOP CHALLENGE",
        title_text="Part B: Interactive Live Peer Challenge (3 Mins)",
        subtitle_text="Audience Participation: Classify each real-world Grab specification as [A] Quality Attribute or [B] Constraint.",
        badge_color=ACCENT_AMBER
    )

    # Top Poll Context Banner
    poll_banner = add_card(slide, left=0.8, top=1.82, width=11.733, height=0.55, bg_color=CARD_BG, border_color=ACCENT_AMBER, border_width_pt=1)
    ptf = poll_banner.text_frame
    ptf.word_wrap = True
    ptf.margin_left = Inches(0.2)
    ptf.margin_top = Inches(0.1)
    pp = ptf.paragraphs[0]
    pp.text = "LIVE AUDIENCE POLL ANCHOR: Lim Chin Jiek (24304094) [A]  |  MS TEAMS FORM / LIVE POLL ACTIVE"
    pp.font.name = FONT_HEADING
    pp.font.size = Pt(9.5)
    pp.font.bold = True
    pp.font.color.rgb = ACCENT_AMBER

    pr = pp.add_run()
    pr.text = "   |   Cast your classification votes now: [A] Quality Attribute  vs.  [B] Constraint (60s Timer)"
    pr.font.name = FONT_BODY
    pr.font.size = Pt(9.5)
    pr.font.color.rgb = TEXT_LIGHT

    # 4 Challenge Spec Cards in 2x2 Grid
    specs = [
        # Spec 1
        (0.8, 2.48, 5.72, 2.15, "SPECIFICATION 1: Telematics Transit Security", PRIMARY,
         "\"All Grab driver GPS telemetry packets transmitted over public cellular networks MUST be encrypted using TLS 1.3 with AES-256-GCM cipher suites to comply with regional transport cyber regulations.\"",
         "Regulatory Transport Cybersecurity Mandate"),
        # Spec 2
        (6.81, 2.48, 5.72, 2.15, "SPECIFICATION 2: Food Delivery ETA Prediction", ACCENT_EMERALD,
         "\"The GrabFood machine learning ETA prediction engine must calculate arrival estimates with a Mean Absolute Error (MAE) under 3.5 minutes across 90% of completed deliveries.\"",
         "Machine Learning Model Predictive Accuracy Metric"),
        # Spec 3
        (0.8, 4.75, 5.72, 2.15, "SPECIFICATION 3: Financial Cloud Data Sovereignty", ACCENT_ROSE,
         "\"The GrabPay microservice cluster MUST strictly run within the Amazon Web Services (AWS) ap-southeast-1 (Singapore) region to comply with MAS/BNM financial data residency requirements.\"",
         "Statutory Central Bank Data Residency Restriction"),
        # Spec 4
        (6.81, 4.75, 5.72, 2.15, "SPECIFICATION 4: Festive Surge Checkout Throughput", ACCENT_AMBER,
         "\"During Lunar New Year surge traffic (15,000 orders/sec), the checkout system must successfully process payment authorizations in <= 1.5 seconds without dropping connections.\"",
         "Concurrency Stress & Latency Threshold Metric")
    ]

    for left_c, top_c, w_c, h_c, title_c, color_c, spec_text, hint_text in specs:
        card = add_card(slide, left=left_c, top=top_c, width=w_c, height=h_c, bg_color=CARD_BG, border_color=CARD_BORDER)
        ctf = card.text_frame
        ctf.word_wrap = True
        ctf.margin_left = Inches(0.2)
        ctf.margin_right = Inches(0.2)
        ctf.margin_top = Inches(0.12)

        # Header
        hp = ctf.paragraphs[0]
        hp.text = title_c
        hp.font.name = FONT_HEADING
        hp.font.size = Pt(10.5)
        hp.font.bold = True
        hp.font.color.rgb = color_c

        # Context hint
        hint_p = ctf.add_paragraph()
        hint_p.text = f"Context: {hint_text}"
        hint_p.font.name = FONT_BODY
        hint_p.font.size = Pt(8.5)
        hint_p.font.color.rgb = TEXT_MUTED

        # Spec Quote
        qp = ctf.add_paragraph()
        qp.space_before = Pt(4)
        qp.text = spec_text
        qp.font.name = FONT_BODY
        qp.font.size = Pt(9.5)
        qp.font.italic = True
        qp.font.color.rgb = TEXT_LIGHT

        # Voting Options Bar
        opt_p = ctf.add_paragraph()
        opt_p.space_before = Pt(6)
        r_a = opt_p.add_run()
        r_a.text = "[A] Quality Attribute      "
        r_a.font.name = FONT_HEADING
        r_a.font.size = Pt(9.5)
        r_a.font.bold = True
        r_a.font.color.rgb = ACCENT_EMERALD

        r_sep = opt_p.add_run()
        r_sep.text = "OR      "
        r_sep.font.name = FONT_BODY
        r_sep.font.size = Pt(9)
        r_sep.font.color.rgb = TEXT_MUTED

        r_b = opt_p.add_run()
        r_b.text = "[B] Constraint"
        r_b.font.name = FONT_HEADING
        r_b.font.size = Pt(9.5)
        r_b.font.bold = True
        r_b.font.color.rgb = ACCENT_ROSE


# =========================================================
# SLIDE 8: Challenge Solutions & eLearn Audit Reference
# =========================================================
def build_slide_8(prs):
    slide = add_slide_with_bg(prs)
    add_header(
        slide,
        badge_text="EVALUATION & PARTICIPATION AUDIT",
        title_text="Challenge Solutions & Official eLearn Audit Key",
        subtitle_text="Authoritative classification breakdown and exact audit rule statement for workshop participation verification.",
        badge_color=ACCENT_AMBER
    )

    # Left Column: 4 Solutions Breakdown (width = 5.5 inches)
    sol_cards = [
        (0.8, 1.82, 5.5, 1.15, "SPEC 1 -> [B] CONSTRAINT", ACCENT_ROSE,
         "Mandated by regional transport cyber regulations. Binary Pass/Fail compliance. Architects have zero discretion to use weaker ciphers for lower compute."),
        (0.8, 3.06, 5.5, 1.15, "SPEC 2 -> [A] QUALITY ATTRIBUTE", ACCENT_EMERALD,
         "Texas DIR quantified Efficiency / Accuracy metric (MAE < 3.5m). Continuous spectrum; engineering trades off ML compute costs vs. accuracy."),
        (0.8, 4.30, 5.5, 1.15, "SPEC 3 -> [B] CONSTRAINT", ACCENT_ROSE,
         "Statutory data residency boundary mandated by MAS/BNM central banks. Hard geographic boundary; zero architectural trade-off permitted."),
        (0.8, 5.54, 5.5, 1.15, "SPEC 4 -> [A] QUALITY ATTRIBUTE", ACCENT_EMERALD,
         "Quantified Efficiency & Throughput under load (15,000 req/s, <=1.5s). Scalable engineering trade-off achieved via auto-scaling and Redis caching.")
    ]

    for left_c, top_c, w_c, h_c, title_c, color_c, rationale_c in sol_cards:
        c_shape = add_card(slide, left=left_c, top=top_c, width=w_c, height=h_c, bg_color=CARD_BG, border_color=CARD_BORDER)
        ctf = c_shape.text_frame
        ctf.word_wrap = True
        ctf.margin_left = Inches(0.18)
        ctf.margin_right = Inches(0.18)
        ctf.margin_top = Inches(0.08)

        tp = ctf.paragraphs[0]
        tp.text = title_c
        tp.font.name = FONT_HEADING
        tp.font.size = Pt(10.5)
        tp.font.bold = True
        tp.font.color.rgb = color_c

        rp = ctf.add_paragraph()
        rp.space_before = Pt(2)
        rp.text = rationale_c
        rp.font.name = FONT_BODY
        rp.font.size = Pt(8.5)
        rp.font.color.rgb = TEXT_LIGHT

    # Right Column: eLearn Audit Submission Card (width = 5.98 inches)
    audit_card = add_card(slide, left=6.55, top=1.82, width=5.98, height=4.87, bg_color=CARD_BG, border_color=ACCENT_AMBER, border_width_pt=1.5)
    atf = audit_card.text_frame
    atf.word_wrap = True
    atf.margin_left = Inches(0.25)
    atf.margin_right = Inches(0.25)
    atf.margin_top = Inches(0.2)

    ap1 = atf.paragraphs[0]
    ap1.text = "MANDATORY eLEARN ATTENDANCE AUDIT"
    ap1.font.name = FONT_HEADING
    ap1.font.size = Pt(12)
    ap1.font.bold = True
    ap1.font.color.rgb = ACCENT_AMBER

    ap2 = atf.add_paragraph()
    ap2.text = "Audit Lead: Chiew Yee Fan (25100545) [A] | Technical Auditor & Q&A Lead"
    ap2.font.name = FONT_BODY
    ap2.font.size = Pt(9.5)
    ap2.font.color.rgb = TEXT_MUTED

    ap_inst = atf.add_paragraph()
    ap_inst.space_before = Pt(8)
    ap_inst.text = "Instructions for All Audience Members:\nTo receive full workshop participation marks, copy and paste the EXACT verbatim rule statement below into Question 2 of your eLearn MS Form audit submission:"
    ap_inst.font.name = FONT_BODY
    ap_inst.font.size = Pt(9.5)
    ap_inst.font.color.rgb = TEXT_LIGHT

    # Callout Quote Box (Golden amber border inside card)
    quote_shape = add_card(slide, left=6.8, top=3.25, width=5.48, height=2.2, bg_color=RGBColor(24, 30, 42), border_color=ACCENT_AMBER, border_width_pt=1)
    qtf = quote_shape.text_frame
    qtf.word_wrap = True
    qtf.margin_left = Inches(0.2)
    qtf.margin_right = Inches(0.2)
    qtf.margin_top = Inches(0.15)

    qp_label = qtf.paragraphs[0]
    qp_label.text = "EXACT AUDIT RULE TEXT (COPY VERBATIM):"
    qp_label.font.name = FONT_HEADING
    qp_label.font.size = Pt(9)
    qp_label.font.bold = True
    qp_label.font.color.rgb = ACCENT_AMBER

    qp_quote = qtf.add_paragraph()
    qp_quote.space_before = Pt(4)
    qp_quote.text = "\"Quality Attributes represent internally engineered, continuous performance trade-offs evaluated on a sliding scale (Texas DIR 2008), whereas Constraints are externally imposed, binary boundaries that strictly delimit the solution space without architectural compromise.\""
    qp_quote.font.name = FONT_BODY
    qp_quote.font.size = Pt(10)
    qp_quote.font.bold = True
    qp_quote.font.color.rgb = TEXT_WHITE

    # Audit Note Footer
    audit_note = add_card(slide, left=6.55, top=5.65, width=5.98, height=1.04, bg_color=CARD_BG_ALT, border_color=CARD_BORDER)
    ntf = audit_note.text_frame
    ntf.word_wrap = True
    ntf.margin_left = Inches(0.2)
    ntf.margin_top = Inches(0.08)
    np = ntf.paragraphs[0]
    np.text = "Audit Verification Rules: "
    np.font.name = FONT_HEADING
    np.font.size = Pt(9)
    np.font.bold = True
    np.font.color.rgb = ACCENT_AMBER

    nr = np.add_run()
    nr.text = "Form timestamp must be within 5 minutes of session conclusion. Strict automated keyword verification applies. Submissions lacking exact phrasing will be flagged for secondary audit."
    nr.font.name = FONT_BODY
    nr.font.size = Pt(8.5)
    nr.font.color.rgb = TEXT_MUTED


# =========================================================
# SLIDE 9: Synthesis & Wrap-up: Scope Collapse Prevention
# =========================================================
def build_slide_9(prs):
    slide = add_slide_with_bg(prs)
    add_header(
        slide,
        badge_text="SYNTHESIS & GOVERNANCE",
        title_text="Synthesis: Preventing A-SPSRI Scope Collapse",
        subtitle_text="Architectural decision heuristics, scope boundary protection, and session handover.",
        badge_color=PRIMARY
    )

    columns_data = [
        # Column 1
        (0.8, 1.82, 3.65, 5.2, "1. The A-SPSRI Guardrail", "AVOIDING SCOPE COLLAPSE", ACCENT_ROSE, [
            ("Root Cause of Collapse", "Scope collapses when engineering teams confuse negotiable Quality Attributes with hard Constraints (or vice-versa)."),
            ("Failure Mode A: Over-Constraining", "Treating Quality Attributes as inviolable constraints causes hyper-rigid architectures, budget explosions, and missed deadlines."),
            ("Failure Mode B: Under-Constraining", "Treating Constraints as negotiable trade-offs causes regulatory shutdowns, app store rejection, and legal breach."),
            ("Architectural Remedy", "Mandate formal Architecture Decision Records (ADRs) at Milestone 0 explicitly classifying every requirement as Pillar 1 or 2.")
        ]),
        # Column 2
        (4.84, 1.82, 3.65, 5.2, "2. 3-Step Decision Filter", "SCOPE TAXONOMY ALGORITHM", PRIMARY, [
            ("Step 1: Origin Test", "Is this requirement externally mandated by law, client platform, or legacy infra? If YES -> Hard CONSTRAINT (Zero trade-off)."),
            ("Step 2: Trade-off Test", "Can the engineering team trade off capital, compute, or design effort to improve it? If YES -> QUALITY ATTRIBUTE."),
            ("Step 3: Texas DIR Test", "Does the Quality Attribute define a Metric, Threshold, and Stress Context? If vague -> REJECT until quantified."),
            ("Governance Output", "Generates clean Service Level Objectives (SLOs) and an unambiguous compliance audit checklist.")
        ]),
        # Column 3
        (8.88, 1.82, 3.65, 5.2, "3. Takeaway & Q&A Handover", "SESSION CONCLUSION & DEFENSE", ACCENT_EMERALD, [
            ("Final Architectural Axiom", "\"Software architecture is the disciplined practice of maximizing Quality Attributes within the rigid boundary envelope of Constraints.\""),
            ("10-Minute Pacing Audit", "Precision roadmap satisfied: 7 mins theory & Grab case, 3 mins live peer challenge & eLearn audit verification."),
            ("Floor Handover", "Co-Presenters Aly Irwanshah [R] & Gabriel Gan [R] hand over floor to Chiew Yee Fan (25100545) [A]."),
            ("Technical Defense", "Chiew Yee Fan opens the floor for panel evaluation, technical auditing, and audience Q&A.")
        ])
    ]

    for left_c, top_c, w_c, h_c, title_c, badge_c, color_c, items_c in columns_data:
        c_shape = add_card(slide, left=left_c, top=top_c, width=w_c, height=h_c, bg_color=CARD_BG, border_color=CARD_BORDER)
        ctf = c_shape.text_frame
        ctf.word_wrap = True
        ctf.margin_left = Inches(0.2)
        ctf.margin_right = Inches(0.2)
        ctf.margin_top = Inches(0.18)

        # Badge pill
        bp = ctf.paragraphs[0]
        bp.text = badge_c
        bp.font.name = FONT_HEADING
        bp.font.size = Pt(8.5)
        bp.font.bold = True
        bp.font.color.rgb = color_c

        # Title
        tp = ctf.add_paragraph()
        tp.space_before = Pt(2)
        tp.text = title_c
        tp.font.name = FONT_HEADING
        tp.font.size = Pt(12)
        tp.font.bold = True
        tp.font.color.rgb = TEXT_WHITE

        # Divider line inside card
        dp = ctf.add_paragraph()
        dp.text = "-----------------------------"
        dp.font.name = FONT_HEADING
        dp.font.size = Pt(6)
        dp.font.color.rgb = CARD_BORDER

        for sub_h, sub_d in items_c:
            ip = ctf.add_paragraph()
            ip.space_before = Pt(5)
            ir1 = ip.add_run()
            ir1.text = f"{sub_h}\n"
            ir1.font.name = FONT_HEADING
            ir1.font.size = Pt(9)
            ir1.font.bold = True
            ir1.font.color.rgb = color_c

            ir2 = ip.add_run()
            ir2.text = sub_d
            ir2.font.name = FONT_BODY
            ir2.font.size = Pt(8.5)
            ir2.font.color.rgb = TEXT_LIGHT


# =========================================================
# MAIN EXECUTION
# =========================================================
def main():
    output_filename = "CKS222_Group2_Scope_Pillars.pptx"
    prs = create_base_presentation()

    print("Building Slide 1: Title & RACI Allocations...")
    build_slide_1(prs)

    print("Building Slide 2: Workshop Architecture (10-Minute Roadmap)...")
    build_slide_2(prs)

    print("Building Slide 3: Theoretical Foundation (Pillar 1 vs Pillar 2)...")
    build_slide_3(prs)

    print("Building Slide 4: Pillar 1 Deep Dive (Texas DIR Framework)...")
    build_slide_4(prs)

    print("Building Slide 5: Pillar 2 Deep Dive (Architectural Constraints)...")
    build_slide_5(prs)

    print("Building Slide 6: Industrial Case Study (Grab SuperApp)...")
    build_slide_6(prs)

    print("Building Slide 7: Part B: Interactive Peer Challenge...")
    build_slide_7(prs)

    print("Building Slide 8: Challenge Solutions & eLearn Audit Reference...")
    build_slide_8(prs)

    print("Building Slide 9: Synthesis & Wrap-up (Scope Collapse Prevention)...")
    build_slide_9(prs)

    prs.save(output_filename)
    print(f"Presentation successfully saved to: {os.path.abspath(output_filename)}")

if __name__ == "__main__":
    main()
